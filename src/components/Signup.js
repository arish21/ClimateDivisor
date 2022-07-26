import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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

const Signup = () => {
  return (
    <div>
      <div className="centered-signup-div">
        <div className="centered-signup-box">
          <h3 className="login-heading">
            <u>Get started with your account</u>
          </h3>

          <form className="form-css">
            <TextInput type="text" label="First Name" />
            <TextInput type="text" label="Last Name" />
            <TextInput type="email" label="Email address" />
            <TextInput type="password" label="Password" />
            <div className="form-text">
              <Form.Text className="text">
              *Use 8 or characters with a mix of letters, numbers & symbols
              </Form.Text>
            </div>
            <TextInput type="password" label="Confirm Password" />
          </form>
          <Link to="/">
          <div className="login-btn-area">
            <Button variant="btn login-btn ">Signup</Button>
          </div>
          </Link>
          <Link to="/login">

          <div className="cancel-btn">
            <Button variant="btn cancel-b">
              <u>Sign In Instead?</u>
            </Button>
          </div>
          </Link>
          <Link to="/">
          <div className="cancel-btn">
            <Button variant="btn ">
              Cancel
            </Button>
          </div>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
