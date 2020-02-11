import React, { Component } from 'react';

class FormField extends Component {
    render() {
        return (
          <div>
            {/* <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/> */}

            {/* <div className={this.props.fieldType} type={this.props.type} label={this.props.label} placeholder={this.props.placeholder}></div> */}

            <div className="field">
              <label className="label">{this.props.label}</label>
              <div className="control">
                <input
                  className="input"
                  type={this.props.type}
                  placeholder={this.props.placeholder}
                />
              </div>
            </div>
          </div>
        );
    }
}

export default FormField;