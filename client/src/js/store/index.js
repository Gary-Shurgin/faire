import { createStore, combineReducers } from 'redux'
import { menuReducer } from '../header/MenuType'
import { noteReducer } from '../home/NotesData'
import { personReducer } from '../person/PersonData'

const store = createStore(
    combineReducers({
        menu: menuReducer,
        note: noteReducer,
        person: personReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store