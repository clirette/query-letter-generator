import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import kofi from "../images/kofiButton.png";

const Template = props => {
  return (
    <div className="template">
      <Header current="active" />
      <div className="template-container">
        <div className="template__div">
          <h1 className="template__header">
            Query for {props.title || "[Title]"}
          </h1>
          <p className="template__text">
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
            {props.newNormal || "[The New Normal]"},{" "}
            {props.pronoun || "[Pronoun]"} discovers{" "}
            {props.discoveries || "[New Discoveries]"}.{" "}
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
        </div>
        <div className="instructions">
          <h1 className="template__header">
            What am I supposed to do with this?
          </h1>
          <p className="instructions__description">
            The query letter you’re looking at isn’t perfect, but it’s a
            starting point. The raw material is there. Now, it’s your turn to
            actually turn it into something good. The generator’s goal is to be
            applicable to as many stories as possible, so now you need to mold
            the query to your story and give it your voice. Rework the hook into
            something more exciting. Move the setting information to the first
            paragraph. Say “yours cordially” instead of “yours sincerely.” Add a
            second introductory paragraph to introduce your other narrator,
            because your story has two protagonist.
            <br />
            <br />
            Make it yours.
            <br />
            <br />
            Now that you have your generated query, make sure to check out the{" "}
            <Link to="/advice">Advice</Link> page for tips, tricks, and
            resources on editing your letter and moving forward with the
            querying process.
          </p>
          <a
            href="https://ko-fi.com/letswritesomenovels"
            target="_blank"
            rel="noopener noreferrer"
            className="kofiLink"
          >
            <img src={kofi} alt="kofi-button" className="kofiButton" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Template;
