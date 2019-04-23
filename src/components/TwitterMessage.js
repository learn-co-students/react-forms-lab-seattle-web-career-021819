import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <h3>
          {this.props.maxChars - this.state.message.length} characters left
        </h3>
      </div>
    );
  }
}

export default TwitterMessage;
