import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      tweet: ''
    };
    this.handleTweetLength = this.handleTweetLength.bind(this)
  }

  handleTweetLength(event){
    if(this.state.tweet.length < this.props.maxChars){
      this.setState({
        tweet: event.target.value
      })
    }
  }

  render() {

    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleTweetLength} value={this.state.tweet}type="text" name="message" id="message" />
        {this.props.maxChars - this.state.tweet.length}
      </div>
    );
  }
}

export default TwitterMessage;
