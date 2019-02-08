import React from 'react'
import { reduxForm } from 'redux-form'
import { fields } from './PersonLayout'
import { Form, validateRequired } from '../forms/Form'
import { isNotEmail } from 'sane-email-validation'
import { connect } from 'react-redux'
import { mapStateToProps } from './PersonAction'
import { submitAction, submitLocal } from '../forms/Buttons'

const validate = (input) => {
    const errors = validateRequired(fields, input)
    if ( input.eMail && isNotEmail(input.eMail) ) {
        errors.eMail = 'Invalid e-mail'
    }
    return errors
}

const editButtons = (props) =>
    <div>
        {!props.current.id ? 
            submitAction({action: 'Add', props}) : 
            submitAction({action: 'Update', props})
        }
        &nbsp; &nbsp;
        {submitLocal({
            action: props.current.id ? 'CancelEdit' : 'Cancel', 
            label: 'Cancel', props}
            )}
    </div>

const buttons = (props) => 
    props.editing ? 
        editButtons(props) : 
        <div>{submitLocal({ action: 'Edit', props})}</div>

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
    buttons,
})(PersonForm)

export default PersonForm