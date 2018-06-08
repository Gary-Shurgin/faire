import React from 'react'
import { action } from '../person/PersonData'

const Login = ({login}) => (
    <div>
        <div className='ans-title ans-first' >Login Page</div>
        <div className='ans-box'>
            <br/>
            <div className='ans-title ans-clickable'>Select your SCA name from a list</div>
            <br/>
            <hr/>
            <br/>
            <div className='ans-title ans-clickable'
                onClick={() => action.createPerson()}>
                Create a new entry for the Faire
            </div>
            <br/>
        </div>
    </div>
)

export default Login