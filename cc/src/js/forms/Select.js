import React from 'react'
import { Field } from 'redux-form'
import { fieldItem } from './Field'

const Select = (field, editing) =>
    <Field key={field.name} {...field} component={editing ? select : display} />

const select = fieldItem(({input, items}) =>
    <select {...input} >
        {input.value ? '' : <option value=''>{input.label}</option>}
        {items.map((item) =>
            <option key={item.name} value={item.name}>{item.label}</option>
        )}
    </select>
)

const display = fieldItem(({input, items}) => 
    input.value ? items.find(item => item.name === input.value).label : ''
)

export default Select

