import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { current: "" };
  }

  handleClick = e => {
    console.log(e.target.dataset);
  };

  render() {
    return (
      <header className="navbar">
        <NavLink to="/" className="nav-link-icon">
          <img
            src={logo}
            alt="Query Generator typewriter logo"
            className="logo"
          />
        </NavLink>
        <ul className="nav-links">
          <li className="nav-link">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink activeClassName="active" to="/generator">
              Generator
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink activeClassName="active" to="/example">
              Example
            </NavLink>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
