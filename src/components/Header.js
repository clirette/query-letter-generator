import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.navLinks = React.createRef();
    this.header = React.createRef();
  }

  toggleLinks = e => {
    this.navLinks.current.classList.toggle("toggled-links");
    this.header.current.classList.toggle("toggled-header");
  };

  render() {
    return (
      <header className="navbar" ref={this.header}>
        <NavLink to="/" className="nav-link-icon">
          <img
            src={logo}
            alt="Query Generator typewriter logo"
            className="logo"
          />
        </NavLink>
        <ul className="nav-links" ref={this.navLinks}>
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
        <div className="bars" onClick={this.toggleLinks}>
          <div className="bar bar-1" />
          <div className="bar bar-2" />
          <div className="bar bar-3" />
        </div>
      </header>
    );
  }
}

export default Header;
