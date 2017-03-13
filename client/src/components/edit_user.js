import React from 'react'
import LabelInput from './label_input'

export default React.createClass({
    render: function() {
        return (<div>
            <form width="100%">
                    <LabelInput keyName='title' label='Title' />
                    <LabelInput keyName='sca_name' label='SCA Name' />
                    <LabelInput keyName='password' label='Password' />
                <LabelInput keyName='modern_name' label='Modern Name' />
                <LabelInput keyName='address' label='Address' />
                    <LabelInput keyName='city' label='City' />
                    <LabelInput keyName='state' label='State' />
                    <LabelInput keyName='zip_code' label='Zip Code' />
                    <LabelInput keyName='phone' label='Phone' />
                    <LabelInput keyName='email' label='E-mail' />
            </form>
        </div>);
    }
});
