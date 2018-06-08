import store from '../store/index'

const HOME_MENU = 'homeItem'
const RULES_MENU = 'rulesItem'
const CRITERIA_MENU = 'criteriaItem'
const LOGIN_MENU = 'loginMenu'
const PERSON_FORM = 'personForm'

const init = HOME_MENU

export const mapStateToProps = state => {
    return { menu: state.menu }
}

const _isMenu = (state, item) => state == item

export const check = {
    isHome: (state) => _isMenu(state, HOME_MENU),
    isRules: (state) => _isMenu(state, RULES_MENU),
    isCriteria: (state) => _isMenu(state, CRITERIA_MENU),
    isLogin: (state) => _isMenu(state, LOGIN_MENU),
    isPersonForm: (state) => _isMenu(state, PERSON_FORM),
}

const SET_MENU = 'setMenu'

const _setMenu = (state, item) => {
    if ( !_isMenu(state, item) ) {
        store.dispatch({
            type: SET_MENU,
            payload: item,
        })
    }
}

export const action = {
    setHome: (state) => _setMenu(state, HOME_MENU),
    setRules: (state) => _setMenu(state, RULES_MENU),
    setCriteria: (state) => _setMenu(state, CRITERIA_MENU),
    setLogin: (state) => _setMenu(state, LOGIN_MENU),
    setPersonForm: () => _setMenu({}, PERSON_FORM),
}

export const menuReducer = (state = init, action) => {
    switch(action.type) {
    case SET_MENU:
        return action.payload
    }
    return state
}