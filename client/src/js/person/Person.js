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

    iSNotSubmit() {
        const req = fields.filter(({id, required}) => {
            return required && this.state[id] === ''   
        })
        const equals = isEqual(this.state, this.props.person)
        return equals || req.length > 0
    }

    handleSubmit(event) {
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
                    <button disabled={this.iSNotSubmit()} 
                            type='submit'>Save</button> 
                </form>
            </div>
        </div>
    }
}

export default connect(mapStateToProps)(Person)