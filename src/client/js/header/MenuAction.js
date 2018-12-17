import store from '../store/index'
import { SET_PERSON } from '../person/PersonAction'
const HOME_MENU = 'homeItem'
const RULES_MENU = 'rulesItem'
const CRITERIA_MENU = 'criteriaItem'
const LOGIN_MENU = 'loginMenu'

const init = {
    menu: HOME_MENU,
    person: null,
}

export const mapStateToProps = state => ({ 
    menu: state.menu.menu,
    person: state.menu.person,
})

const _isMenu = (state, item) => state === item

export const check = {
    isHome: (state) => _isMenu(state, HOME_MENU),
    isRules: (state) => _isMenu(state, RULES_MENU),
    isCriteria: (state) => _isMenu(state, CRITERIA_MENU),
    isLogin: (state) => _isMenu(state, LOGIN_MENU),
}

const SET_MENU = 'setMenu'

const _setMenu = (state, item) => {
    if ( !_isMenu(state, item) ) {
        store.dispatch({
            type: SET_MENU,
            payload: { menu: item },
        })
    }
}

export const action = {
    setHome: (state) => _setMenu(state, HOME_MENU),
    setRules: (state) => _setMenu(state, RULES_MENU),
    setCriteria: (state) => _setMenu(state, CRITERIA_MENU),
    setLogin: (state) => _setMenu(state, LOGIN_MENU),
}

export const menuReducer = (state = init, {type, payload}) => {
    switch(type) {
    case SET_MENU:
        return { ...state, ...payload }
    case SET_PERSON:
        return { ...state, person: payload }
    default:
        return state
    }
}