import React from 'react'
import styled from 'styled-components'
import { controls } from './Controls'
import { Buttons } from './Buttons'

const FormGrid = styled.div`
    display: grid;
    grid-row-gap: 3px;
`

const itemType = (field, {editing}) => 
    field.control ? field.control(field, editing) : controls.input(field, editing)

export class Form extends React.Component {
    componentDidMount() {
        const { initialize, current } = this.props
        initialize(current)
    }

    componentDidUpdate(prevProps) {
        const { initialize, current } = this.props
        if ( prevProps.current !== current ) {
            initialize(current)
        }   
    }

    render() {
        const { fields } = this.props
        return <form>
            <FormGrid>
                {fields.map(field => itemType(field, this.props))}
                <Buttons {...this.props}  />
            </FormGrid>
        </form>
    }
}

export const validateRequired = (fields, input) => 
    fields.filter(field => 
        field.required && !input[field.name]
    ).reduce((result, field) => (
        { ...result, [field.name] : 'Required' }), {} 
    )
