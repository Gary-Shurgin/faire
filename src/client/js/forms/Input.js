import React from 'react'
import { Field } from 'redux-form'
import { fieldItem } from './Field'

const Input  = (field, editing) =>
        <Field key={field.name} {...field} component={editing ? input : display} />

const input = fieldItem(field => 
        <input {...field.input} id={field.name} type="text" placeholder={field.label} autoFocus={field.focus}/>
    )

const display = fieldItem(field => field.input.value)
    
export default Input