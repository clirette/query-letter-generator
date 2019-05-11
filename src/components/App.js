import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from "./Form";
import Template from "./Template";
import Landing from "./Landing";
import TemplateExample from "./TemplateExample";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      chosenName: "",
      pronoun: "",
      age: "",
      definingCharacteristic: ""
    };
  }

  handleFormSubmit() {}

  handleInputChange = (stateItem, value) => {
    this.setState({ [stateItem]: value });
    console.log(this.state);
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/generator"
            render={props => (
              <Form handleInputChange={this.handleInputChange} />
            )}
          />
          <Route exact path="/template-example" component={TemplateExample} />
          <Route
            exact
            path="/template"
            render={props => <Template {...this.state} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
