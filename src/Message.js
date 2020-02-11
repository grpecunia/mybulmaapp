import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
          <div>
            <article class="message is-dark">
              <div class="message-header">
                <p>{this.props.messageHeader}</p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="message-body">
                <p>{this.props.messageBody}</p>
              </div>
            </article>
          </div>
        );
    }
}

export default Message;