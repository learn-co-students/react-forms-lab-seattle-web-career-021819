import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }
  updateState = ev => {
    this.setState({ message: ev.target.value });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.updateState}
        />
        Remaining Characters: {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
