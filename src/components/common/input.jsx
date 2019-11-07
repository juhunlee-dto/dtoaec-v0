import React from "react";

//name={name} is neccesary because ...rest doesn't have name in it.
//name is for handleChange event in Form
const Input = ({ name, label, errors, ...rest }) => {
  const inputFormGroupStyle = {
    marginBottom: 20
  };
  const labelStyle = {
    marginBottom: 0
  };
  return (
    <div className="form-group" style={inputFormGroupStyle}>
      <label style={labelStyle} htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} className="form-control" {...rest}></input>
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;

// before ...rest
// const Input = ({
//   name,
//   label,
//   value,
//   onChange,
//   errors,
//   type = "text",
//   autoFocus = false
// }) => {
//   return (
//     <div className="form-group">
//       <label htmlFor={name}>{label}</label>
//       <input
//         id={name}
//         className="form-control"
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         autoFocus={autoFocus}
//       ></input>
//       {errors && <div className="alert alert-danger">{errors}</div>}
//     </div>
//   );
// };

// export default Input;
