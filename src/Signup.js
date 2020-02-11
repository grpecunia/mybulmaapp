import React, { Component } from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

class Signup extends Component {
    render() {
        return (
          <div>
            <Navbar />
            {/* <FormField /> */}
            <FormField type="text" label="Name" placeholder="e.g. John Smith" />
            <FormField type="email" label="Email" placeholder="johny@noemail.com" />
            <FormField type="password" label="Password" placeholder="Enter your password" />
            <br/>
            <CoolButton btnType="button is-success" btnText="Submit" />
          </div>
        );
    }
}

export default Signup;