import React from "react";

export const Textarea = (props) => {
  return (
    <div className={`mb-3`}>
      <label htmlFor={props.name} className={`form-label`} style={{fontWeight: "bold"}}>
        {props.title}
      </label>
      <textarea
        className={`form-control`}
        id={props.name}
        name={props.name}
        value={props.value}
        rows={props.rows || 3}
        cols={props.rows || 30}
        onChange={props.handleChange} />
    </div>
  );
}