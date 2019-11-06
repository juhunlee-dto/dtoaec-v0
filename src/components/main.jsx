import React, { Component } from "react";
import logo from "./../D-Logo-512-05.svg";

class MainPage extends Component {
  state = {};

  p1Style = {
    fontSize: "6vmin",
    textAlign: "center",
    marginBottom: "2px"
  };

  p2Style = {
    fontSize: "3vmin",
    textAlign: "center",
    marginTop: "0"
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p style={this.p1Style}>D.TO AEC</p>
          <p style={this.p2Style}>
            User Driven Knowledge Sharing Platform for AEC Industy
          </p>
          <p style={this.p2Style}>Coming Soon...</p>
        </header>
      </div>
    );
  }
}

export default MainPage;
