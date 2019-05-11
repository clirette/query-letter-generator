import React from "react";
import { Link } from "react-router-dom";

const Template = props => {
  console.log(props);
  return (
    <div className="template">
      <p>Full name is {props.values.fullName}</p>
      <Link to="/">Home</Link>
      <Link to="/generator">Generator</Link>
    </div>
  );
};

export default Template;
