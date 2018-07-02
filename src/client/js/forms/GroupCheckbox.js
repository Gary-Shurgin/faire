import React from 'react';
import PropTypes from 'prop-types';

class GroupCheckbox extends React.Component {
    constructor(props) {
        super(props);

        this.isActive.bind(this.isActive)
        this.clearClick.bind(this.cleanClick
        )
    }

    clearClick(event) {
        event.preventDefault()
    }

    isActive(value) {
        return value ? 'ans-active' : ''
    }

    render() {
        const { text, values, items, onClick } = this.props;
        return (
            <div>
                <label>{text}: </label>
                <span>
                {items.map(({id, view}) => (
                    <span key={id} id={id} 
                            className={this.isActive(values[id])} 
                            onMouseDown={this.clearClick}
                            onClick={() => onClick(id, !values[id])}>
                            &nbsp;{view}&nbsp;
                    </span>
                ))}
                </span>
            </div>
        )
    };  
}

GroupCheckbox.propTypes = {
    text: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default GroupCheckbox;
