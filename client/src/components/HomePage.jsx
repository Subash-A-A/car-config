import React from "react";
import { useState } from "react";
import "../styles/Home.scss";

function HomePage() {
  const isAuthenticated = localStorage.getItem("authenticated") || false;
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
            <div className="btn">Get Started!</div>
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;
