import React, { useState } from "react";
import "../styles/Login.scss";
import login_bg from "../assets/login_bg.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [isUser, setUser] = useState(false);
  function toggleState() {
    setUser(!isUser);
  }
  async function signIn() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const res = await axios.post("http://localhost:4000/app/login", {
      username: user,
      password: pass,
    });

    if (res.data == "existing user") {
      localStorage.setItem("authenticated", true);
      console.log("fine");
      navigate("homepage");
    } else {
      alert(res);
    }
  }
  async function signUp() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const res = await axios.post("http://localhost:4000/app/signup", {
      username: user,
      password: pass,
      email: email,
    });
    if (res == "existing user") {
    } else {
      alert(res.data);
    }
  }
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
              {isUser ? (
                <>
                  <h1>Sign in</h1>
                  <div className="toggle_btn" onClick={toggleState}>
                    Don't have an account? Sign up
                  </div>
                </>
              ) : (
                <>
                  <h1>Sign up</h1>
                  <div className="toggle_btn" onClick={toggleState}>
                    Already have an account? Sign in
                  </div>
                </>
              )}
            </div>
            <div className="login_fields">
              {isUser ? (
                <></>
              ) : (
                <input
                  id="email"
                  className="input_field"
                  type="email"
                  required
                  placeholder="Email"
                ></input>
              )}
              <input
                id="username"
                className="input_field"
                type="text"
                required
                placeholder="Username"
              ></input>
              <input
                id="password"
                className="input_field"
                type="password"
                required
                placeholder="Password"
              ></input>
            </div>
            {isUser ? (
              <>
                <div className="login_button" onClick={signIn}>
                  Sign in
                </div>
              </>
            ) : (
              <>
                <div className="login_button" onClick={signUp}>
                  Sign up
                </div>
              </>
            )}
          </div>
          <img className="login_bg" src={login_bg} alt="Login Background"></img>
        </div>
      </div>
    </>
  );
}

export default Login;
