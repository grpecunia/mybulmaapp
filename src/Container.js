import React, { Component } from 'react';
import Signup from './Signup';
import Message from "./Message";

class Container extends Component {
    render() {
        return (
          <div>
            <div className="container">
              <Signup />
              <Message messageHeader="This is a message!" messageBody="Hi! this is an attempt at a Bulma Message."/>
            </div>
          </div>
        );
    }
}

export default Container;