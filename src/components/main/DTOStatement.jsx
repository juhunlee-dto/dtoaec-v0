import React from "react";
import logo from "./../../D-Logo-512-05.svg";

const DTOStatement = () => {
  const p1Style = {
    fontSize: "6vmin",
    marginBottom: "2px"
  };

  const p2Style = {
    fontSize: "3vmin",
    marginTop: "0"
  };

  return (
    <div className="dto-statement-container">
      <img src={logo} className="dto-logo" alt="logo" />
      <p style={p1Style}>D.TO AEC</p>
      <p style={p2Style}>
        User Driven Knowledge Sharing Platform for AEC Industy
      </p>
      <p style={p2Style}>Coming Soon...</p>
    </div>
  );
};

export default DTOStatement;
