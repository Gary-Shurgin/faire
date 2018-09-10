import React from 'react'
import { Field } from 'redux-form'
import styled, { css } from 'styled-components'
import Buttons from './Buttons'

const Label = styled.label`
    font-weight: bold;
    text-align: right;
    color: darkgreen;

    ${props => props.required && css`
        &::before {
            content: '* ';
            color: red;
        }
    `}
`
const fieldLabel = (field) => 
    <Label htmlFor={field.name} {...field}>
        {field.label}:
    </Label>

const error = ({meta}) => 
    meta && meta.touched && !meta.valid && 
        <p style={{color:'red'}}>{meta.error}</p>

const GridElement = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-column-gap: 5px;
`

const fieldItem = render => (field) => {
    return <GridElement key={field.name}>
        {fieldLabel(field)}
        {render(field)}
        {error(field)}
    </GridElement>
}

const fieldInput = fieldItem((field) =>
    <input {...field.input} id={field.name} type="text" placeholder={field.label}/>
)

const fieldSelect = fieldItem(({input, items}) => 
    <select {...input} >
        {input.value ? '' : <option value=''>{input.label}</option>}
        {items.map((item) =>
            <option key={item.name} value={item.name}>{item.label}</option>
        )}
    </select>
)

const Toggle = styled.span`
    background-color: ${props => props.value && 'gold'};
    margin: 0 2px;
    padding: 0 3px;
`

const toggleItem = (item) => 
    <Toggle key={item.input.name} {...item.input}
        onClick={() => 
            item.input.onChange( !item.input.value )
        }>
        {item.label}
    </Toggle>
 
const fieldGroups = (field) =>
    <GridElement key={field.name}>
        {fieldLabel(field)}
        <div>
            {field.items.map((item) => 
                <Field key={item.name} {...item} component={toggleItem} />
            )}
        </div>
    </GridElement>

    const itemType = (field) => {
        switch (field.type) {
            case 'select':
                return <Field key={field.name} {...field} component={fieldSelect} />
            case 'group':
                return fieldGroups(field)
            default:
                return <Field key={field.name} {...field} component={fieldInput} />
        }
    }

const FormGrid = styled.div`
    display: grid;
    grid-row-gap: 3px;
`

export const doForm = (fields, props, action) => {
    console.log('doForm', props)
    return <form onSubmit={props.handleSubmit}>
        <FormGrid>
            {fields.map(field => itemType(field) )}
            <Buttons editing={props.editing} isNew={!props.initialValues.id} {...action} />
        </FormGrid>
    </form>
}

export const validateRequired = (fields, input) => 
    fields.filter(field => 
        field.required && !input[field.name]
    ).reduce((result, field) => (
        { ...result, [field.name] : 'Required' }), {} 
    )


