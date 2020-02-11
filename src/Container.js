import React, { Component } from 'react';
import Signup from './Signup';

class Container extends Component {
    render() {
        return (
          <div>
            <div className="container">
              <Signup />
            </div>
          </div>
        );
    }
}

export default Container;