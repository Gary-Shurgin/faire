import store from '../store/index'
import { action as menu } from '../login/LoginAction'

const CREATE_PERSON = 'createPerson'
export const SET_PERSON = 'setPerson'
const EDIT_PERSON = 'editPerson'

const init = {
    current: { 
        scaName: 'Vorlin', 
        modernName: 'Gary', 
        cellPhone: 12345,
        eMail: 'a@a.a',
        password: 'none',
        region: 'nOaken', 
        titles:[ 'pelican', 'captain' ],
    },
    editing: true,
}

export const mapStateToProps = ({person}) => person

export const check = {
    hasPerson: (person) => person.id
}

const _setPerson = (person) => {
    store.dispatch({
        type: SET_PERSON,
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

const _setEditing = () => {
    store.dispatch({
        type: EDIT_PERSON,
    })
}

export const action = {
    createPerson: () => _createPerson(),
    set: (person) => _setPerson(person),
    edit: () => _setEditing(),
}

export const personReducer = (state = init, action) => {
    switch(action.type) {
    case CREATE_PERSON:
        return action.payload
       
    case SET_PERSON:
        return {
            current: action.payload,
            editing: false,
        }

    case EDIT_PERSON:
        return Object.assign({}, state, {
            editing: true
        })

    default:
        return state
    }
}
