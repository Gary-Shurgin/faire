import React from 'react'
import { reduxForm } from 'redux-form'
import { fields } from './PersonLayout'
import { Form, validateRequired } from '../forms/Form'
import { isNotEmail } from 'sane-email-validation'
import { connect } from 'react-redux'
import { mapStateToProps } from './PersonAction'


const validate = (input) => {
    const errors = validateRequired(fields, input)
    if ( input.eMail && isNotEmail(input.eMail) ) {
        errors.eMail = 'Invalid e-mail'
    }
    return errors
}

let PersonForm = (props) =>
    <div>
        &nbsp;
        <div className='ans-box'>
            <div className='ans-title ans-first'>Person Form</div>
            <Form {...props} />
        </div>
    </div>
    
PersonForm = connect(mapStateToProps)(PersonForm)

PersonForm = reduxForm({
    form: 'personForm',
    validate,
    fields,
})(PersonForm)

export default PersonForm