const v4 = require('uuid/v4')

export const addFlow = store => next => action => {
    if ( action.type === 'ADD' ) {
        // validate
        const one = Object.assign({}, action.payload.init, action.payload.values, { 
            id: v4(),
            lastUpdated: new Date()
        })
        console.log('addFlow', one)
        // send to server
    }
    return next(action)
}

export const addId = store => next => action => {
    if ( action.type === 'SET_ID' ) {
        return next({

        })
    }
    return next(action);
}