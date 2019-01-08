
export const Request = store => next => action => {
    if ( action.type === 'Request' ) {
        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(action.payload)
        })
        .then(r => {
            if (r.ok) return r.json()
            return { errors: [ { message: r } ] }
        })
        .then(({data, errors}) => {
            if ( errors ) {
                const message = errors[0].message
                return store.dispatch({ 
                    type: 'Error',
                    form: action.form,
                    payload: message.statusText ? 
                        {error: 'Response', value: message.statusText} : 
                        JSON.parse(message),
                })
            }
            else { 
                return store.dispatch({
                    type: Object.keys(data)[0],
                    form: action.form,
                    payload: Object.values(data)[0],
                })
            } 
        }) 
        .catch(r => console.log('catch', r) || 
            store.dispatch({
                type: 'Error',
                form: action.form,
                payload: { error: 'Request', value: r.toString() },
            })
        )
   
    }

    next(action)
}