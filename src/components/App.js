import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Form from "./Form";
import Template from "./Template";
import Landing from "./Landing";
import TemplateExample from "./TemplateExample";
import Advice from "./Advice";
import NotFound from "./NotFound";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      agentName: "",
      agentPersonalization: "",
      authorName: "",
      category: "",
      challengeOutcome1: "",
      challengeOutcome2: "",
      chosenName: "",
      compTitle1: "",
      compTitle2: "",
      definingCharacteristic: "",
      discoveries: "",
      fullName: "",
      genre: "",
      greatestChallenge: "",
      honorific: "",
      hopesAndDreams: "",
      incitedAction: "",
      incitingIncident: "",
      initialChallenges: "",
      newNormal: "",
      penName: "",
      personalDetail1: "",
      personalDetail2: "",
      pronoun: "",
      qualification1: "",
      qualification2: "",
      sequel: "",
      setting: "",
      tagLine: "",
      title: "",
      updatedPurpose: "",
      wordCount: ""
    };
  }

  handleInputChange = (stateItem, value) => {
    this.setState({ [stateItem]: value });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/advice" component={Advice} />
            <Route
              path="/generator"
              render={props => (
                <Form handleInputChange={this.handleInputChange} />
              )}
            />
            <Route path="/example" component={TemplateExample} />
            <Route
              path="/template"
              render={props => <Template {...this.state} />}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
