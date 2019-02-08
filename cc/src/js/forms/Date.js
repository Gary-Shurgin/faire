import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { GridElement } from './Field'
import dateFormat from 'dateformat'

const Css = styled.div`
    text-align: right;
    font-style: italic;
    color: gray;
`

const Date = (field, editing) => {
    if ( ! editing ) {
        return <GridElement key={field.name}>
            <div></div>
            <Field {...field} component={display}></Field>
        </GridElement>
    }
}
    
const display = field => <Css>Date: {dateFormat(field.input.value, 'mmmm d, yyyy')}</Css>

export default Date