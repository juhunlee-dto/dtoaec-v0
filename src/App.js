import React from "react";
import logo from "./D-Logo-512-05.svg";
import "./App.css";

function App() {
  const p1Style = {
    fontSize: "6vmin",
    textAlign: "center",
    marginBottom: "2px"
  };

  const p2Style = {
    fontSize: "3vmin",
    textAlign: "center",
    marginTop: "0"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p style={p1Style}>D.TO AEC</p>
        <p style={p2Style}>
          User Driven Knowledge Sharing Platform for AEC Industy
        </p>
        <p style={p2Style}>Coming Soon...</p>
      </header>
    </div>
  );
}

export default App;
