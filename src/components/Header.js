import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

class Header extends Component {
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
            <NavLink
              activeClassName="active"
              className={this.props.current}
              to="/generator"
            >
              Generator
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink activeClassName="active" to="/example">
              Examples
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink activeClassName="active" to="/advice">
              Advice
            </NavLink>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
