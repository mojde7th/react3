import { Component } from "react";
import LoginForm from '../components/loginForm'
import RegisterForm from '../components/registerForm'
class Login extends Component {
  state = { tab: "Login" };
  render() {
    console.log("tab:", this.state);
    return (
      <div className="login-container">
        <div className="tabs-container">
          <button
            className={this.state.tab === "Login" ? "bg-active" : "bg-inactive"}
            onClick={() => {
              this.setState({ tab: "Login" });
            }}
          >
            login
          </button>
          <button
            className={
              this.state.tab === "register" ? "bg-active" : "bg-inactive"
            }
            onClick={() => {
              this.setState({ tab: "register" });
            }}
          >
            register
          </button>
          {this.state.tab === "Login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    );
  }
}

export default Login;
