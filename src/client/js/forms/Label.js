import React from 'react'
import styled, { css } from 'styled-components'

const LabelCss = styled.label`
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
const Label = (field) => 
    <LabelCss htmlFor={field.name} {...field}>
        {field.label}:
    </LabelCss>

export default Label

