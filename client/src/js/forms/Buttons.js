import React from 'react'
import { formValueSelector } from 'redux-form'
import styled from 'styled-components'
import store from '../store/index'

const GridElement = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    grid-column-gap: 5px;
    margin-top: 1em;    
`

const Message = styled.div`
    color: red;
    font-weight: bold;
    text-align: right;
`

export const Buttons = (props) =>
    <GridElement>
        <p></p>
        {props.buttons(props)}
        <Message>{props.error}</Message>
    </GridElement>

const emptyFields = (props) => {
    const input = formValueSelector(props.form)
    return props.fields.filter(field => 
        field.required && input(props, field.name)
    ).length === 0
}

const allowSubmit = (props) =>
    props.dirty && props.valid && emptyFields(props)
   
const doSubmit = (type, form, payload) => 
    store.dispatch({type, form, payload})
    

export const submitAction = ({action, label, props}) =>
    <button type='submit'
        disabled={!allowSubmit(props)}
        onClick={props.handleSubmit((values) => 
            doSubmit(action, props.form, values)
        )}
    >{label ? label : action}</button>

export const submitLocal = ({action, label, props}) =>
    <button type='button'
        onClick={() => 
            props.reset() || doSubmit(action, props.form, props.current)}
    >{label ? label : action}</button>
