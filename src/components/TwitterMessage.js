import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      maxChars: this.props.maxChars
    };
  }

  setInput = (event) => {
    this.setState({input: event.target.value})
    this.setState({maxChars: this.state.maxChars - 1})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.setInput(event)} />
        <p>{this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
