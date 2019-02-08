import { action as reducer } from './PersonAction'
import { action as menus } from '../login/LoginAction'
import latinize from 'latinize'
import { fields } from './PersonLayout'
// const { gql } = require('apollo-server')
const v4 = require('uuid/v4')

const gather = () => {
    return fields.map(field => {
        return field.group ? field.group : field.name
    }).join(' ')
}

const displayFields = `id scaName modernName cellPhone eMail password region titles normalizedName notes lastUpdated`
const addQuery = `mutation AddPerson($person:PersonInput!) { addPerson(person:$person)  { ${displayFields} } }`
const updateQuery = `mutation UpdatePerson($person:PersonInput!) { updatePerson(person:$person)  { ${displayFields} } }`

const updateName = text => latinize(text).toLowerCase()

export const personRequest = store => next => action => {
    console.log('fields', gather())
    const { type, form, payload } = action
    if ( form === 'personForm' ) {
        switch( type ) {
            case 'addPerson':
            case 'updatePerson':
                reducer.set(payload)
                reducer.clear()
                break
            
            case 'Error':
                reducer.setError(buildMessage(payload))
                break

            case 'Add':
                store.dispatch(buildRequest(addQuery, payload, { id: v4() }))
                break

            case 'Update':
                store.dispatch(buildRequest(updateQuery, payload))
                break

            case 'Edit':
                reducer.edit()
                break

            case 'Cancel':
                reducer.clearPerson()
                menus.setSelect()
                break

            case 'CancelEdit':
                reducer.clear()
                break

            default: 
        }
    }
    next(action)
}

const buildRequest = (query, payload, addition = {}) => ({
    type: 'Request',
    form: 'personForm',
    payload: {
        query: query,
        variables: { person: {
            ...payload,
            lastUpdated: new Date(),
            normalizedName: updateName(payload.scaName),
            ...addition,
        }}
    }
})

const buildMessage = (payload) => {
    const { error, value } = payload
    switch(error) {
        case 'Duplicate':
            return `'${value}' already exists`

        case 'Missing':
            return `Cannot find '${value}'`

        case 'Request':
        case 'Response':
            return value

        default:
            return JSON.stringify(payload)
    }
}
