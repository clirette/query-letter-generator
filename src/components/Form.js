import React, { Component } from "react";
import { Link } from "react-router-dom";

import FormItem from "./FormItem";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="query-form">
        <div className="header">
          <h1>Query Generator</h1>
        </div>
        <form className="form">
          <h3 className="top-h3">Section One: Your Protagonist</h3>
          <FormItem
            htmlFor="fullName"
            label="Full Name"
            description="What is the full name of your protagonist? If you have multiple protagonists, focus on one for now."
            example="Junie B. Jones, Jeffrey “The Dude” Lebowski, Harry Potter, Eddard “Ned” Stark"
            handleInputChange={this.props.handleInputChange}
          />
          <FormItem
            htmlFor="chosenName"
            label="Chosen Name"
            description="What is the name your character is actually referred to throughout the novel?"
            example="Junie, Jeff/The Dude, Harry, Ned"
          />
          <FormItem
            htmlFor="pronoun"
            label="Pronoun"
            description="What is the pronoun you use to describe your character? (Subject form)"
            example="he, she, they"
          />
          <FormItem
            htmlFor="age"
            label="Age"
            description="What is your protagonist’s age at the start of the novel?"
            example="25, 35, 101"
            inputType="number"
          />
          <FormItem
            htmlFor="definingCharacteristic"
            label="Defining Characteristic"
            description="Describe your protagonist using a word or short phrase that can go before their name."
            example="dedicated software engineer, new student, introvert, love-scorned"
          />
          <Link to="/template">
            <input type="submit" value="Submit" />
          </Link>
        </form>
      </div>
    );
  }
}

export default Form;
