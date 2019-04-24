import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      remainingChars: 0
    };
  }

  handleChange = (ev) => {
    this.setState({
        [ev.target.name]: ev.target.value
    },()=>{
      this.setState({
        remainingChars: this.props.maxChars - this.state.message.length
      })
    })
  }

  // remainingChars = () =>{
  //   let charsRemaining = this.props.maxChars - this.state.message.length
  //   return charsRemaining
  // }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <span>Characters Allowed: {this.props.maxChars}</span>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(ev)=>this.handleChange(ev)} />
        <span> Remaining Chars: {this.state.remainingChars}</span>
      </div>
    );
  }
}

export default TwitterMessage;
