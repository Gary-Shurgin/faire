import React from 'react'
import styled from 'styled-components'
import Label from './Label'

export const error = ({meta}) => 
    meta && meta.touched && !meta.valid && 
        <p style={{color:'red'}}>{meta.error}</p>

export const GridElement = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-column-gap: 5px;
`

export const fieldItem = render => field =>
    <GridElement key={field.name}>
        {Label(field)}
        {render(field)}
        {error(field)}
    </GridElement>

