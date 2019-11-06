import React, { Component } from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import MainPage from "./components/main";
import LoginForm from "./components/loginForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <NavBar></NavBar>
          <main className="container">
            <Switch>
              <Route path="/login" component={LoginForm}></Route>
              <Route path="/" component={MainPage}></Route>
            </Switch>
          </main>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
