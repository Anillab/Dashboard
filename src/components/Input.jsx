import React from 'react';

const Input=(props) =>{
  return(
    <div className="form-group">
    <label forhtml={props.name} className="form-label">{props.title}</label>
    <input
      className="form-control"
      id={props.code}
      name={props.code}
      inputtype={props.Inputype}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      {...props}
    />

  </div>
  )
}

export default Input;
