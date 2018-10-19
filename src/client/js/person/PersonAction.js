import store from '../store/index'
import { action as menu } from '../login/LoginAction'

const CREATE_PERSON = 'createPerson'
export const ADD_PERSON = 'addPerson'

const init = {
    current: { modernName: 'Gary', region: 'nOaken' },
    editing: true,
}

export const mapStateToProps = ({person}) => person

export const check = {
    hasPerson: (person) => person.id
}

const _addPerson = (person) => {
    console.log('addPerson', person)
    store.dispatch({
        type: ADD_PERSON,
        payload: person,
    })
}

const _createPerson = () => {
    store.dispatch({
        type: CREATE_PERSON,
        payload: init,
    })
    menu.setPersonForm()
}

export const action = {
    createPerson: () => _createPerson(),
    add: (person) => _addPerson(person),
}

export const personReducer = (state = init, action) => {
    switch(action.type) {
    case CREATE_PERSON:
        return action.payload
       
    case ADD_PERSON:
        return {
            current: action.payload,
            editing: false,
        }
    default:
        return state
    }
}
