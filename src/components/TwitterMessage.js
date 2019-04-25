import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      text: "",
      maxChars: props.maxChars
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev) {
    if (ev.target.value.length <= this.state.maxChars) {
      this.setState({text: ev.target.value})
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.text}
          onChange={ev => this.handleChange(ev)}
        />
      <br/><em>Character count: {this.state.text.length}</em>
      <br/><em>Remaining characters: {this.state.maxChars - this.state.text.length}</em>
      </div>
    );
  }
}

export default TwitterMessage;
