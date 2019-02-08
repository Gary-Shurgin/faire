import React from 'react'
import { Field } from 'redux-form'
import { fieldItem } from './Field'

const Textarea = (field, editing) =>
    <Field key={field.name} {...field} component={editing ? input : display} />

const input = fieldItem(field => 
    <textarea {...field.input}>{field.input.value}</textarea>
)

const display = fieldItem(field => field.input.value)

export default Textarea