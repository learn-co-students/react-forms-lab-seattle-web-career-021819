import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {tweet: ""};
  }

  handleTyping = (event) => {
    if(this.state.tweet.length < this.props.maxChars){
      this.setState({tweet: event.target.value})
    }

  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.tweet} onChange={event => this.handleTyping(event)}/>
        {this.props.maxChars - this.state.tweet.length}
      </div>
    );
  }
}

export default TwitterMessage;
