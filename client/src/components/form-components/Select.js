import React from "react";

export const Select = (props) => {
  return (
    <div className={`mb-3`}>
      <label htmlFor={props.name} className={`form-label`} style={{fontWeight: "bold"}}>
        {props.title}
      </label>
      <select
        className={`form-select`}
        name={props.name}
        id={props.name}
        value={props.mpaa_rating}
        onChange={props.handleChange}
      >
        <option className={`form-select`}>Choose...</option>
        {props.options.map((option) => (
          <option className={`form-select`} value={option.id}>{option.value}</option>
        ))}
      </select>
    </div>
  );
}