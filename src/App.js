import React, { Component } from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/navBar";
import MainPage from "./components/main";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import NotFound from "./components/common/notFound";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer></ToastContainer>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/join" component={RegisterForm}></Route>
            <Route exact path="/" component={MainPage}></Route>
            <Route path="/notFound" component={NotFound} />
            <Redirect to="/notFound" />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
