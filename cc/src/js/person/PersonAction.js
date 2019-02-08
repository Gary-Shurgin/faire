import store from '../store/index'

const CREATE_PERSON = 'createPerson'
export const SET_PERSON = 'setPerson'
const EDIT_PERSON = 'editPerson'
const ERROR_PERSON = 'errorPerson'

const init = {
//    scaName: 'Vorlin', 
    // modernName: 'Gary', 
    // cellPhone: 12345,
    // eMail: 'a@a.a',
    // password: 'none',
    // region: 'nOaken', 
    // titles:[ 'pelican', 'captain' ],
    titles: [],
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
}

const _setEditing = (editing) => {
    store.dispatch({
        type: EDIT_PERSON,
        payload: editing,
    })
}

const _setError = (message) => {
    store.dispatch({
        type: ERROR_PERSON,
        payload: message,
    })
}

export const action = {
    createPerson: () => _createPerson(),
    clearPerson: () => _setPerson(null),
    set: (person) => _setPerson(person),
    edit: () => _setEditing(true),
    clear: () => _setEditing(false),
    setError: (message) => _setError(message)
}

export const personReducer = (state = {}, {type, payload}) => {
    switch(type) {
    case CREATE_PERSON:
        return { current: init, editing: true, error: '' }

    case SET_PERSON:
        return { current: payload, editing: false, error: '' }

    case EDIT_PERSON:
        return { ...state, editing: payload, error: '' }

    case ERROR_PERSON:
        return { ...state, error: payload }

    default:
        return state
    }
}
