import React, { Component } from "react";

export default class FormItem extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", value2: "" };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
    this.props.handleInputChange(this.props.htmlFor, e.target.value);
  };

  handleSecondChange = e => {
    this.setState({ value2: e.target.value });
    this.props.handleInputChange(this.props.htmlFor2, e.target.value);
  };

  render() {
    return (
      <div className="item">
        <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
        <p>
          {this.props.description} {this.props.children}
        </p>
        <p>
          <em>Ex. {this.props.example}</em>
        </p>
        <input
          type={this.props.inputType}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          value={this.state.value}
        />
        {this.props.htmlFor2 && (
          <input
            type={this.props.inputType}
            placeholder={this.props.placeholder2}
            onChange={this.handleSecondChange}
            value={this.state.value2}
          />
        )}
      </div>
    );
  }
}
