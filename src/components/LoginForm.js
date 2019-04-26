import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.userNameOnChange = this.userNameOnChange.bind(this)
    this.passwordOnChange = this.passwordOnChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  userNameOnChange(event){
    this.setState({
      username: event.target.value
    })
  }

  passwordOnChange(event){
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    if(!this.state.username || !this.state.password){
      return
    }
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.userNameOnChange} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.passwordOnChange} value={this.state.password} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button  type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
