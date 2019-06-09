import React from "react";
import { Link } from "react-router-dom";
import { report } from "../helpers/ga";

const Landing = () => {
  report(window.location.pathname);
  return (
    <div className="landing-body">
      <div className="text-box">
        <h1 className="text-box__heading">Welcome to Query Generator!</h1>
        <p className="text-box__lead">
          Query Generator is a tool for fiction writers in the early stages of
          drafting or reworking their query letters. The Generator helps you
          identify important aspects of your story and gathers them into a
          standard query structure. Fair warning: Query Generator is a robot,
          not a writer. Once your query is generated, it’s your job to modify it
          to your manuscript, voice and style. You’re the talent; the Generator
          is just here to help you get started.
        </p>
        <div className="links">
          <Link to="/generator" className="link">
            Generator
          </Link>
          <Link to="/example" className="link">
            Examples
          </Link>
          <Link to="/advice" className="link">
            Advice
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
