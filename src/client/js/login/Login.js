import React from 'react'
import { connect } from 'react-redux';
import { check, mapStateToProps } from './LoginAction'
import LoginSelect from './LoginSelect'
import PersonForm from '../person/PersonForm'

const Login = ({page}) => {
    if ( check.isAdd(page) ) return <PersonForm />
    return <LoginSelect />
}

export default connect(mapStateToProps)(Login)