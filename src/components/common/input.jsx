import React from "react";

const Input = ({ name, label, value, onChange, autoFocus = false }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="text"
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
      ></input>
    </div>
  );
};

export default Input;
