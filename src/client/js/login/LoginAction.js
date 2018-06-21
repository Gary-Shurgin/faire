import store from '../store/index'

const SELECT_PAGE = 'select'
const CREATE_USER = 'createUser'
const SHOW_USER = 'showUser'

const init = SELECT_PAGE

export const mapStateToProps = state => (
    { page: state.login }
)

const _isPage = (state, item) => state === item

export const check = {
    isSelect: state => _isPage(state, SELECT_PAGE),
    isAdd: state => _isPage(state, CREATE_USER),
    isCurrent: state => _isPage(state, SHOW_USER),
}

const SET_PAGE = 'setPage'

const _setPage = (state, item) => {
    if ( !_isPage(state, item) ) {
        store.dispatch({
            type: SET_PAGE,
            payload: item,
        })
    }
}

export const action = {
    setSelect: state => _setPage(state, SELECT_PAGE),
    setAdd: state => _setPage(state, CREATE_USER),
}

export const loginReducer = (state = init, action) => {
    switch(action.type) {
        case SET_PAGE:
            return action.payload
        default:
            return state
    }
}
