import React from 'react'

export default React.createClass({
    render: function() {
        console.log(this.props);
        return (<div>
            <label style={{textAlign:'right'}} width="25%" htmlFor={this.props.keyName}>{this.props.label}</label>
            <input id={this.props.keyName} />
        </div>);
    }
});
