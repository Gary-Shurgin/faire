import React from 'react'
import { Field } from 'redux-form'
import { fieldItem } from './Field'

const Password = (field, editing) =>
    <Field key={field.name} {...field} component={editing ? input : display} />

const input = fieldItem(field => 
    <input {...field.input} id={field.name} type="password" placeholder={field.label} autoFocus={field.focus}/>
)

const display = fieldItem(({input}) => '*'.repeat(input.value.length))

export default Password