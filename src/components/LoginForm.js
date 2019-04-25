import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (ev) => {
    // ev.preventDefault();
    this.setState({
      [ev.target.name]: ev.target.value
    })
    {console.log(ev.target.name, ev.target.value)}
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    // {console.log("submit button clicked")}
    if (!this.state.username || !this.state.password) {
      {console.log("username and/or password is empty")}
      return;
    } else {
      return this.props.handleLogin(this.state);
      {console.log("handleLogin should work")}
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              onChange={ event => this.handleChange(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              onChange={ event => this.handleChange(event)}
            />
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
