import React, { Component } from "react";

export default class FormItem extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
    this.props.handleInputChange(this.props.htmlFor, e.target.value);
  };

  render() {
    return (
      <div className="item">
        <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
        <p>{this.props.description}</p>
        <p>
          <em>Ex. {this.props.example}</em>
        </p>
        <input
          type={this.props.inputType}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}
