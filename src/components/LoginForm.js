import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      password: this.props.password
    };
  }

  handleUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log()
    const username = this.state.username
    const password = this.state.password
    {this.state.password && this.state.username ? this.props.handleLogin({username, password}) : null}
  }

  render() {
    return (
      <form onSubmit={ event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleUsernameChange(event)} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handlePasswordChange(event)} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
