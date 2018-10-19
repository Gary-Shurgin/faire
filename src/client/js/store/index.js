import { createStore, combineReducers, applyMiddleware } from 'redux'
import { menuReducer } from '../header/MenuAction'
import { noteReducer } from '../home/NotesAction'
import { personReducer } from '../person/PersonAction'
import { loginReducer } from '../login/LoginAction'
import { reducer as formReducer } from 'redux-form'
import { addFlow } from '../flow/Add'

const app = combineReducers({
    menu: menuReducer,
    note: noteReducer,
    form: formReducer,
    person: personReducer,
    login: loginReducer,
})

const store = createStore(
    app,
    applyMiddleware(addFlow)
    // ,
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //     window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store