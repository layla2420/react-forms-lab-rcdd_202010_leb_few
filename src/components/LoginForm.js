import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:""
      password:""
    };
  }
  handleInputChange=event=>{
    this.setstate({
      [event.target.name]=event.target.value
    })
  }
  handleSubmit= event=>{
    event.preventDefault()
    if(!this.state.username||!this.stete.password)return
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" valur={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.handleSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
