import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:""
      password:""
    };
  }

  render() {
    return (
      <form>
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
          <button type="submit" onSubmit={this.props.handleLogin}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
