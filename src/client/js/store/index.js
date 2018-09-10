import { createStore, combineReducers } from 'redux'
import { menuReducer } from '../header/MenuAction'
import { noteReducer } from '../home/NotesAction'
import { personReducer } from '../person/PersonAction'
import { loginReducer } from '../login/LoginAction'
import { reducer as formReducer } from 'redux-form'

const store = createStore(
    combineReducers({
        menu: menuReducer,
        note: noteReducer,
        form: formReducer,
        person: personReducer,
        login: loginReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store