import React, {Component} from "react";

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  // Because I set the default state to empty strings (which have a length),
  // it will always evaluate to true always. Beware of this in the conditional
  // in the handleSubmit

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.username.length > 1 && this.state.password.length > 1)
      this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange}/>
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
