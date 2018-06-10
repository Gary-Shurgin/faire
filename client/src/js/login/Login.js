import React from 'react'
import { connect } from 'react-redux';
import { check, mapStateToProps } from './LoginAction'
import LoginSelect from './LoginSelect'
import Person from '../person/Person'

const Login = ({page}) => {
    console.log('login', page, check.isAdd(page))
    if ( check.isAdd(page) ) return <Person />
    return <LoginSelect />
}

export default connect(mapStateToProps)(Login)