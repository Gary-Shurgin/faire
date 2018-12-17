import React from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'
import store from '../store/index'
import { controls } from './Controls'

const FormGrid = styled.div`
    display: grid;
    grid-row-gap: 3px;
`

const doSubmit = (data, {current, form}) => {
    const usage = current.id ? 'Update' : 'Add'
    console.log('submit', form)
    store.dispatch({
        type: usage,
        payload: data,
        form: form,
    })
}

const itemType = (field, {editing}) => 
    field.control ? field.control(field, editing) : controls.input(field, editing)


export class Form extends React.Component {
    componentDidMount() {
        const { initialize, current } = this.props
        console.log('form mount', current)
        initialize(current)
    }

    componentDidUpdate(prevProps) {
        const { initialize, current } = this.props
        if ( prevProps.current !== current ) {
            console.log('form update', current)
            initialize(current)
        }   
    }

    render() {
        const { fields, current, handleSubmit } = this.props
        return <form onSubmit={handleSubmit(data => 
                    doSubmit(data, this.props)
                )}>
            <FormGrid>
                {fields.map(field => itemType(field, this.props))}
                <Buttons props={this.props} isNew={!current.id} />
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
