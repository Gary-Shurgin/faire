import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
    clearClick = (event) => event.preventDefault()

    isActive = (value) => value ? 'ans-active' : ''

    isChecked = (name, value) => this.isActive(name === value)

    required = (value) => value ? <span style={({color:'red'})}>* </span> : ''

    render() {
        const { text, name, value, items, onClick, required } = this.props;
        return (
            <div>
                <label htmlFor={name}>{this.required(required)}{text}: </label>
                <span>
                {items.map(({id, view}) => (
                    <span key={id} id={id} 
                            className={this.isChecked(value, id)} 
                            onMouseDown={this.clearClick}
                            onClick={() => onClick(name, id)}>
                            &nbsp;{view}&nbsp;
                    </span>
                ))}
                </span>
            </div>
        )
    };  
}

Select.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    required: PropTypes.bool,
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Select;
