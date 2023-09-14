import React from "react";
import "../styles/Login.scss";
import login_bg from "../assets/login_bg.png";

function Login() {
  return (
    <>
      <div className="bg">
        <div className="title">
          <h1>Welcome!</h1>
          <h2>Get customized cars at car-config </h2>
        </div>
        <div className="form_container">
          <div className="login_form">
            <div className="login_title">
              <h1>Sign in</h1>
              <div>Don't have an account? Sign up</div>
            </div>
            <div className="login_fields">
              <input
                id="email"
                className="input_field"
                type="email"
                required
                placeholder="Email"
              ></input>
              <input
                id="password"
                className="input_field"
                type="text"
                required
                placeholder="Password"
              ></input>
            </div>
            <div className="login_button">Sign in</div>
          </div>
          <img className="login_bg" src={login_bg} alt="Login Background"></img>
        </div>
      </div>
    </>
  );
}

export default Login;
