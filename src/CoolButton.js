import React, { Component } from 'react';

class CoolButton extends Component {
    render() {
        return (
          <div>
            <button className={this.props.btnType}>{this.props.btnText}</button>
                      
            {/* <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                <CoolButton isSmall isSuccess>Button 2</CoolButton> */}          
       
          </div>
        );
    }
}

export default CoolButton;