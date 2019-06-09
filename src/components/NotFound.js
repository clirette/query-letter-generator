import React from "react";
import Header from "./Header";
import { report } from "../helpers/ga";
import logo from "../images/logo.png";

const NotFound = () => {
  report(window.location.pathname);
  return (
    <div className="not-found">
      <Header />
      <div className="not-found-container">
        <div className="not-found__titles">
          <h1 className="not-found__title">404</h1>
          <h1 className="not-found__title">Page Not Found</h1>
        </div>
        <div className="images-container">
          <img
            src={logo}
            alt="Query Generator Logo"
            className="not-found__logo not-found__logo--1"
          />
          <img
            src={logo}
            alt="Query Generator Logo"
            className="not-found__logo not-found__logo--2"
          />
          <img
            src={logo}
            alt="Query Generator Logo"
            className="not-found__logo not-found__logo--3"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
