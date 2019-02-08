import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

const ToggleCss = styled.span`
    background-color: ${({match}) => match ? 'gold' : 'inherit'};
    margin: 0 2px;
    padding: 0 3px;
`

const Toggle = (field, editing, group) =>
    <Field key={field.name} name={group.group} label={field.label} item={field.name} 
            component={editing ? input : display} />

const input = ({input, label, item}) => 
    <ToggleCss match={contains(input.value, item)}
            onClick={() => input.onChange( toggleItem(input.value, item) )}>
        {label}
    </ToggleCss>

const display = ({input, label, item}) => 
    <ToggleCss match={contains(input.value, item)}>
        {label}
    </ToggleCss>

const contains = (values, name) => 
    values.indexOf(name) > -1

const toggleItem = (values, name) => {
    const i = values.indexOf(name)
    if ( i === -1 ) {
        return [ ...values, name ]
    } else {
        return [ ...values.slice(0, i), ...values.slice(i+1) ]
    }
}

export default Toggle