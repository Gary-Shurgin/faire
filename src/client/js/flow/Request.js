
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
            if ( errors ) console.log('error', errors)
            else { 
                return store.dispatch({
                    type: Object.keys(data)[0],
                    payload: Object.values(data)[0],
                })
            } 
        })    
    }

    next(action)
}