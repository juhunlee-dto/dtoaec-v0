import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  //how to implement password complexity?
  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(8)
      .label("Password")
  };

  doSubmit = () => {};

  render() {
    const titleStyle = {
      marginBottom: 25
    };

    return (
      <div className="form-container">
        <h1 style={titleStyle}>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", "text", true)}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
