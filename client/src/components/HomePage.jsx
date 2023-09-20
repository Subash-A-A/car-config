import React from "react";
import { useState } from "react";
import "../styles/Home.scss";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function HomePage() {
  const isAuthenticated = localStorage.getItem("authenticated") || false;
  const navigate = useNavigate();
  return (
    <>
      {!isAuthenticated ? (
        <>
          <div className="err_bg">
            <h1>You need to sign in properly to access this page</h1>
          </div>
        </>
      ) : (
        <>
          <div className="home">
            <div className="title_container">
              <h1 className="home_title">CarMod Garage</h1>
              <h2 className="sub_title">Unleash Your Inner Gearhead</h2>
            </div>
            <div
              className="btn"
              onClick={() => {
                navigate("/editor");
              }}
            >
              Get Started!
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;
