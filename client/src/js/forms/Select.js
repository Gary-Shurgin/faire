import React from 'react';
import PropTypes from 'prop-types';
import { ENAMETOOLONG } from 'constants';

class Select extends React.Component {
    constructor(props) {
        super(props);

        this.isActive.bind(this.isActive)
        this.isChecked.bind(this.isChecked)
        this.clearClick.bind(this.cleanClick
        )
    }

    clearClick(event) {
        event.preventDefault()
    }

    isActive(value) {
        return value ? 'ans-active' : ''
    }

    isChecked(name, value) {
        return this.isActive(name === value)
    }

    render() {
        const { text, name, value, items, onClick } = this.props;
        return (
            <div>
                <label htmlFor={name}>{text}: </label>
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
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Select;
