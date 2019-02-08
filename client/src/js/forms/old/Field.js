import React from 'react';
import PropTypes from 'prop-types';

class Field extends React.Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this)
        this.required = this.required.bind(this)
    }

    handleChange({target}) {
        this.props.onChange(target.id, target.value)
    }

    required(value) {
        return value ? <span style={({color:'red'})}>* </span> : ''
    }

    render() {
        const { text, name, value, required, autoFocus } = this.props;
        return (
            <div>
                <label htmlFor={name}>{this.required(required)}{text}: </label>
                <input type='text'                              className='form-control'
                        id={name} value={value}
                        onChange={this.handleChange}
                        autoFocus={autoFocus}
                        autoComplete='off'
                        isrequired={required ? 'true' : 'false'} />  
            </div>
        )
    };  
}

Field.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
}

export default Field;
