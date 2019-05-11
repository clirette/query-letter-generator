import React from "react";
import { Link } from "react-router-dom";

const Template = props => {
  console.log(props);
  return (
    <div className="template">
      <p>
        Dear {props.honorific || "[Honorific]"}{" "}
        {props.agentName || "[Agent Name]"},
        <br />
        <br />
        {props.tagline || "[Tagline]"}...
        <br />
        <br />
        {props.age || "[Age]"}-year-old{" "}
        {props.definingCharacteristic || "[Defining Characteristic]"}{" "}
        {props.fullName || "[Full Name]"} just wants{" "}
        {props.hopesAndDreams || "[Hopes and Dreams]"}, but when{" "}
        {props.incitingIncident || "[Inciting Incident]"},{" "}
        {props.chosenName || "[Chosen Name]"}{" "}
        {props.incitedAction || "[Incited Action]"}. Now,{" "}
        {props.chosenName || "[Chosen Name]"}{" "}
        {props.updatedPurpose || "[Updated Purpose]"}.<br />
        <br />
        As {props.chosenName || "[Chose Name]"}{" "}
        {props.newNormal || "[The New Normal]"}, {props.pronoun || "[Pronoun]"}{" "}
        discovers {props.discoveries || "[New Discoveries]"}.{" "}
        {props.chosenName || "[Chosen Name]"} is put to the test when{" "}
        {props.initialChallenges || "[Initial Challenges]"}, and when{" "}
        {props.greatestChallenge || "[Greatest Challenge]"},{" "}
        {props.pronoun || "[Pronoun]"} has to{" "}
        {props.challengeOutcome1 || "[Outcome 1]"} or{" "}
        {props.challengeOutcome2 || "[Outcome 2]"}.<br />
        <br />
        Complete at {props.wordCount || "[Word Count]"} words,{" "}
        {props.title || "[Title]"} is a {props.category || "[Category]"}{" "}
        {props.genre || "[Genre]"} set in {props.setting || "[Setting]"}. It
        will appeal to readers of {props.compTitle1 || "[Comp 1]"} and{" "}
        {props.compTitle2 || "[Comp 2]"}.{" "}
        {props.sequel &&
          `${props.title ||
            "[Title]"} has potential for a sequel following ${props.chosenName ||
            "[Chosen Name]"}'s story as ${props.pronoun ||
            "[Pronoun]"} continues to ${props.sequel}.`}
        <br />
        <br />I am submitting {props.title || "[Title]"} to you because{" "}
        {props.agentPersonalization || "[Agent Personalization]"}.<br />
        <br />
        {props.qualification1 || "[Qualification 1]"}.{" "}
        {props.qualification2 || "[Qualification 2]"}.{" "}
        {props.personalDetail1 || "[Personal Detail 1]"}.{" "}
        {props.personalDetail2 || "[Personal Detail 2]"}
        <br />
        <br />
        Thank you for your consideration.
        <br />
        <br />
        Yours sincerely,
        <br />
        <br />
        {props.authorName || "[Author Name]"}{" "}
        {props.penName && `(Writing as ${props.penName})`}
      </p>
      <Link to="/">Home</Link>
      <Link to="/generator">Generator</Link>
    </div>
  );
};

export default Template;
