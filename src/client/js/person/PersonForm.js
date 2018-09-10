import React from 'react'
import { reduxForm } from 'redux-form'
import { fields } from './PersonLayout'
import { doForm, validateRequired } from '../forms/Form'
import { isNotEmail } from 'sane-email-validation'
import { connect } from 'react-redux'
import { mapStateToProps, action } from './PersonAction'


const validate = (input) => {
    const errors = validateRequired(fields, input)
    if ( input.eMail && isNotEmail(input.eMail) ) {
        errors.eMail = 'Invalid e-mail'
    }
    console.log('validate', errors)
    return errors
}

let PersonForm = (props) =>
    <div>
        <div className='ans-title ans-first'>Person Form</div>
        <div className='ans-box'>
            {doForm(fields, props, action)}
        </div>
    </div>
    
PersonForm = reduxForm({
    form: 'personForm',
    validate,
})(PersonForm)

PersonForm = connect(mapStateToProps)(PersonForm)

export default PersonForm