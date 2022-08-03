import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function TextInput({ type = "text", label }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && "filled"}>{label}</label>
    </div>
  );
}

const Login = () => {
  return (
    <div className="centered-div">
      <div className="centered-login-box">
        <h3 className="login-heading">Hello again!</h3>
        <p className="login-info">Login with your credentials</p>
        <form className="form-css">
          <TextInput label="Email address" />
          <TextInput type="password" label="Password" />
        </form>
        <div className="form-text">
          <Form.Text>
            <u>Forgot Password?</u>
          </Form.Text>
        </div>
        <Link to="/">
          <div className="login-btn-area">
            <Button variant="btn login-btn ">Login</Button>
          </div>
        </Link>
        <Link to="/">

        <div className="cancel-btn">
          <Button variant="btn cancel-b">
            <u>Cancel</u>
          </Button>
        </div>
        </Link>
        <div className="member-area">
          Not a member?{" "}
          <Link to="/signup">
            <u>Register Now</u>
          </Link>
        </div>
        <div className="or-area">
          <p className="line">
            <span>Or continue with</span>
          </p>
        </div>
        <div className="icons">
          <span>
            <button className="icon-btns">
              <FcGoogle style={{ fontSize: "35px" }} />
            </button>
          </span>
          <span>
            <button className="icon-btns">
              <DiApple style={{ fontSize: "35px" }} />
            </button>
          </span>
          <span>
            <button className="icon-btns">
              <FaFacebook style={{ color: "#4267B2", fontSize: "35px" }} />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
