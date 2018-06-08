import React from 'react'
import { connect } from 'react-redux'
import Home from './home/Home'
import Rules from './rules/Rules'
import Criteria from './criteria/Criteria'
import Login from './login/Login'
import Person from './person/Person'
import { check, mapStateToProps } from './header/MenuType'

const bodyType = (menu) => {
    if ( check.isRules(menu) ) return <Rules />
    if ( check.isCriteria(menu) ) return <Criteria />
    if ( check.isLogin(menu) ) return <Login />
    if ( check.isPersonForm(menu) ) return <Person />
    return <Home />
}

const Body = ({menu}) => (
    <div className='ans-body'>
        {bodyType(menu)}
    </div>
)

export default connect(mapStateToProps)(Body)