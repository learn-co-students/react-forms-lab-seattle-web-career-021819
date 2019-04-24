import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const remainingChars = this.props.maxChars - this.state.message.length 

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleInputChange}/>
        <p>Remaining chars: {remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
