import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", firstName: "", lastName: "" },
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
      .min(5)
      .max(1024)
      .label("Password"),
    firstName: Joi.string()
      .required()
      .min(2)
      .max(50)
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .min(2)
      .max(50)
      .label("Last Name")
  };

  doSubmit = () => {};

  render() {
    const titleStyle = {
      marginBottom: 25
    };

    return (
      <div className="form-container">
        <h1 style={titleStyle}>Join D.TO</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", "text", true)}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("firstName", "First Name")}
          {this.renderInput("lastName", "Last Name")}
          {this.renderButton("Join")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
