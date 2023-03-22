import React from "react";
import "./sign_login.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Sign_LoginPage(prop) {
  const navigate = useNavigate();

  const signupHandler = () => {
    navigate("/");
  };

  const loginhandler = () => {
    navigate("/sign_up");
  };
  return (
    <div className="login">
      <div className="content">
        <img
          className="react_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          alt="react_icon"
        />
        <div className="random_text">
          <p className="text" style={{ fontWeight: "700" }}>
            My name is Anuj Kumar Vishwakarma
          </p>
          <p className="text" style={{ fontWeight: "700" }}>
            I had completed this project in optimized way.
          </p>
        </div>

        <div className="login_signup">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            {prop.type === "signup" ? (
              <p> login</p>
            ) : (
              <p style={{ fontWeight: "bold" }}> login</p>
            )}
          </NavLink>
          <NavLink to="/sign_up" style={{ textDecoration: "none" }}>
            {prop.type === "signup" ? (
              <p style={{ fontWeight: "bold" }}> signup</p>
            ) : (
              <p> signup</p>
            )}
          </NavLink>
        </div>

        <form className="input_fields" action="">
          {prop.type === "signup" ? (
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Enter Your Name"
              required
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          {prop.type === "signup" ? (
            <button className="submit_btn" onClick={signupHandler}>
              SignUp
            </button>
          ) : (
            <button className="submit_btn" onClick={loginhandler}>
              login
            </button>
          )}
          {prop.type === "signup" ? (
            <></>
          ) : (
            <span className="forgot_pass">Forgot Password?</span>
          )}
        </form>

        <p className="login_with">or login with</p>

        <div className="social_icons">
          <img
            className="icons google"
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="google"
          />
          <img
            className="icons facbook"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
            alt="facbook"
          />
          <img
            className="icons twitter"
            src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
            alt="twitter"
          />
        </div>

        <p className="have_account">
          Don't have an account? <span>Create new now!</span>
        </p>
        <p className="term_conditions">
          By signing up, you're agree with our <span> Terms & Conditions</span>
        </p>
      </div>
    </div>
  );
}
