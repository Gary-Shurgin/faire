import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid'
import { isEqual } from 'lodash'
import { fields } from './PersonLayout'
import { mapStateToProps, action } from './PersonAction'
import { renderItem } from '../forms/Layout'

class Person extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.isNotSubmit = this.iSNotSubmit.bind(this)
    }

    componentWillMount() {
        this.setState(this.props.person)
    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps.person)
    }
    
    handleChange(id, value) {
        this.setState({ [id] : value })
    }

    iSNotSubmit(fields) {
        const req = fields.filter(({type, id, required, items}) => {
            if ( type == 'group' ) {
                return this.isNotSubmit(items)
            }
            return required && this.state[id] === ''   
        })
        const equals = isEqual(this.state, this.props.person)
        return equals || req.length > 0
    }

    handleSubmit(event) {
        console.log('submit', event)
        event.preventDefault();
        action.addPerson({ ...this.state, id:uuidv1() });
    }

    render() {
        return <div>
            <div className='ans-title ans-first'>Person Form</div>
            <div className='ans-box'>
                <form onSubmit={this.handleSubmit}>
                    {fields.map((field) => (
                        renderItem(field, this.state, this.handleChange)
                    ))}
                    {this.props.editing ? 
                        <button id='save' disabled={this.iSNotSubmit(fields)} 
                                type='submit'>Save</button> : 
                        <button id='edit' type='submit'>Edit</button>
                    } 
                </form>
            </div>
        </div>
    }
}

export default connect(mapStateToProps)(Person)