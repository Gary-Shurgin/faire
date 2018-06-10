import React from 'react'
import { connect } from 'react-redux'
import { action, mapStateToProps } from './LoginAction'

const Login = ({page}) => (
    <div>
        <div className='ans-title ans-first' >Login Page</div>
        <div className='ans-box'>
            <br/>
            <div className='ans-title ans-clickable'>Select your SCA name from a list</div>
            <br/>
            <hr/>
            <br/>
            <div className='ans-title ans-clickable'
                onClick={() => action.setAdd(page)}>
                Create a new entry for the Faire
            </div>
            <br/>
        </div>
    </div>
)

export default connect(mapStateToProps)(Login)