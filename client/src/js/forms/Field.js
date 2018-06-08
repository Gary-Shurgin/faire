import React from 'react';
import PropTypes from 'prop-types';

class Field extends React.Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({target}) {
        this.props.onChange(target.id, target.value)
    }

    render() {
        const { text, name, value, required, onChange, autoFocus } = this.props;
        return (
            <div>
                <label htmlFor={name}>{text}: </label>
                <input type='text'                              className='form-control'
                        id={name} value={value}
                        onChange={this.handleChange}
                        autoFocus={autoFocus}
                        ref={this.inputItem} 
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
    onChange: PropTypes.func.isRequired,
}

export default Field;
