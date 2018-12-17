import { action as reducer } from './PersonAction'
import latinize from 'latinize'

// const { gql } = require('apollo-server')
const v4 = require('uuid/v4')

const displayFields = `id scaName modernName cellPhone eMail password region titles lastUpdated normalizedName lastUpdated`
const addQuery = `mutation AddPerson($person:PersonInput!) { addPerson(person:$person)  { ${displayFields} } }`

const updateName = text => latinize(text).toLowerCase()

const addComplete = store => next => action => {
    if ( action.type === 'addPerson' ) {
        reducer.set(action.payload)
    }
    next(action)
}

const addSetup = store => next => action => {
    if ( action.type === 'Add' && action.form === 'personForm') {
        const person = Object.assign({}, action.payload, {
                id: v4(),
                lastUpdated: new Date(),
                normalizedName: updateName(action.payload.scaName)
        })
        store.dispatch({
            type: 'Request',
            payload: {
                query: addQuery,
                variables: { person }
            }
        })
    }
    next(action)
}

export const personRequest = [ addSetup, addComplete ]