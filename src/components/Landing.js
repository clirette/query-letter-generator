import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <h1>Query Generator</h1>
      <Link to="/generator">Generator</Link>
      <Link to="/template-example">Example</Link>
    </div>
  );
};

export default Landing;
