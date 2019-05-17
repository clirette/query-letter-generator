import React, { Component } from "react";
import { Link } from "react-router-dom";

import FormItem from "./FormItem";
import Header from "./Header";

class Form extends Component {
  render() {
    return (
      <div className="query-background">
        <Header />
        <div className="query-form">
          <form className="form">
            <h3 className="section-header">Section One: Your Protagonist</h3>
            <FormItem
              htmlFor="fullName"
              label="Full Name"
              description="What is the full name of your protagonist? If you have multiple protagonists, focus on one for now."
              example="Junie B. Jones, Jeffrey &ldquo;The Dude&rdquo; Lebowski, Harry Potter, Eddard &ldquo;Ned&rdquo; Stark"
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="chosenName"
              label="Chosen Name"
              description="What is the name your character is actually referred to throughout the novel?"
              example="Junie, Jeff/The Dude, Harry, Ned"
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="pronoun"
              label="Pronoun"
              description="What is the pronoun you use to describe your character? (Subject form)"
              example="he, she, they"
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="age"
              label="Age"
              description="What is your protagonist&#39;s age at the start of the novel?"
              example="25, 35, 101"
              inputType="number"
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="definingCharacteristic"
              label="Defining Characteristic"
              description="Describe your protagonist using a word or short phrase that can go before their name."
              example="dedicated software engineer, new student, introvert, love-scorned"
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="hopesAndDreams"
              label="Hopes and Dreams"
              description="Before the story begins, what does your character want? What are their goals or dreams? Finish the sentence in the box below."
              example="to fit in at his new boarding school, to escape their evil step-father&#39;s grasp, a new book to read"
              placeholder="Your protagonist wants..."
              handleInputChange={this.props.handleInputChange}
            />
            <hr className="section-divider" />
            <h3 className="section-header">Section Two: The Plot</h3>
            <FormItem
              htmlFor="incitingIncident"
              label="Inciting Incident"
              description="What is the event that upsets your protagonist&#39;s world and sets the story in motion?"
              example="a fellow student dies, The Prince invites them to a ball, she discovers a magical spell book"
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="incitedAction"
              label="Incited Action"
              description="What is the action does your protagonist take as a result of the inciting incident?"
              example="discovers they were murdered, accepts the invitation, decides to protect it at all costs"
              placeholder="My protagonist..."
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="updatedPurpose"
              label="Updated Purpose"
              description="What is your protagonist&#39;s new purpose? And what might be the consequences of not reaching it?"
              example="must investigate the crimes before the murderer strikes again, hatches a plan to make the prince fall in love with them as an escape from her life with their evil step-father, is the only force keeping the book from falling into the hands of an organization bent on ridding the world of magic"
              placeholder="Now the protagonist..."
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="newNormal"
              label="The New Normal"
              description="Your protagonist is doing A Lot in the first half of the book, but in general terms describe the collection of actions that your protagonist is taking, now that events have been incited, and calls to action have been answered."
              example="investigates the strange circumstances surrounding the murder; gets ready to attend the ball; searches for the High Librarian, in whose hands the book will be truly safe"
              placeholder="As your protagonist..."
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="discoveries"
              label="New Discoveries"
              description="As your protagonist dives into the new world of the story, what are they discovering about it and/or themselves? The discovery should complicate their situation."
              example="another student may be responsible for the crime; they may not need the prince to escape their step-father after all; the conspiracy to rid the world of magic goes deeper than they could ever have imagined."
              placeholder="They discover..."
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="initialChallenges"
              label="Initial Challenges"
              description="What are some of the initial challenges your protagonist faces?"
              example="a red herring leads him in the wrong direction and leads him to accuse the wrong person in front of the entire school; the conspirators destroy the library and force her to flee."
              placeholder="They&#39;re put to the test when..."
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="greatestChallenge"
              label="The Great Challenge"
              description="What is your protagonist&#39;s greatest challenge? The problem that seems unsolvable? This should be a plot point introduced mid-way through the book."
              example="Jeff discovers he&#39;s the murderer&#39;s new target; their step-father locks them in a tower when they try to leave for the ball; it turns out the High Librarian is working for the evil organization."
              placeholder="When..."
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="challengeOutcome1"
              label="Challenge Outcomes"
              description="Give two conflicting outcomes to the challenge. Best result vs. Worst result. The thing they think they want vs. the thing they actually need. This will act as a hook to make your reader want to learn what happens to your protagonist."
              example="solve the murder/become the murderer&#39;s next victim; find a way to The Prince/figure out a way to save themselves; learn enough magic to save the book/else be responsible for a world without magic."
              placeholder="They must..."
              htmlFor2="challengeOutcome2"
              placeholder2="Or..."
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="tagline"
              label="Tagine"
              description="Is there an exciting &ldquo;catchphrase&rdquo; that you can preface your story with? Something that can instantly pique the interest of your reader? Your book&#39;s version of &ldquo;When you play the game of thrones, you win or you die…&rdquo; If you don&#39;t have a great tagline, don&#39;t include one. A cheesy, generic tagline can be worse than no tagline at all."
              example="In the furthest bookcase, on the tallest shelf, a hidden world of magic awaits..."
              handleInputChange={this.props.handleInputChange}
            />
            <hr className="section-divider" />
            <h3 className="section-header">Section Three: Meta Data</h3>
            <FormItem
              htmlFor="title"
              label="Title"
              description="What is the title of your book? If you don&#39;t have one, use a placeholder. At this stage, your title doesn&#39;t really matter."
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="wordCount"
              label="Word Count"
              description="Rounding to the nearest 1000th, what is the total word count of your manuscript?"
              handleInputChange={this.props.handleInputChange}
            >
              (
              <a
                href="https://www.writersdigest.com/editor-blogs/guide-to-literary-agents/word-count-for-novels-and-childrens-books-the-definitive-post"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find out if your word count is appropriate
              </a>
              .)
            </FormItem>
            <FormItem
              htmlFor="genre"
              label="Genre"
              description="What is the genre of your novel? Clarity is slightly more important than brevity here, so don&#39;t feel as though you have to use a single word."
              example="mystery, contemporary fantasy, literary,  time-traveling romance"
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="setting"
              label="Setting"
              description="Where and when is your story set? Concisely describe the world of your story."
              example="Warthogs, a fictional Vermont boarding school; the magical kingdom of Cuteprince Land; a magical version of modern-day Edinburgh in a world where librarians are the guardians of ancient magical tomes"
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="category"
              label="Category"
              description="What age range is your book aimed at?"
              example="Picture Book, Chapter Book, Middle Grade, YA, Adult"
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="compTitle1"
              label="Comp Titles"
              description="Choose two books you enjoy that are similar to your book, but in different ways, so that when combined, they give the reader more information about the tone and content of your book than your plot summary does."
              example="The Graveyard Book/Kiki&#39;s Delivery Service, Pride & Prejudice/Dracula, Gone Girl/Star Wars."
              htmlFor2="compTitle2"
              handleInputChange={this.props.handleInputChange}
            >
              (
              <a
                href="http://authornews.penguinrandomhouse.com/comp-titles-an-elevator-pitch-for-your-book/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more about comp titles
              </a>
              .)
            </FormItem>
            <FormItem
              htmlFor="sequel"
              label="Sequels (Optional)"
              description="Will your book have sequels? If so, what will your protagonist do in them?"
              example="solve more mysteries at Murder Academy, explore the world beyond their step-father&#39;s manor, fight against the evil secret society of librarians gone bad"
              handleInputChange={this.props.handleInputChange}
            />
            <hr className="section-divider" />
            <h3 className="section-header">Section Four: You!</h3>
            <FormItem
              htmlFor="authorName"
              label="Your Full Name"
              description="Type your real first and last name here. (If you want to give a nickname or shortened version of your first name, that&#39;s fine.)"
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="penName"
              label="Pen Name"
              description="If you&#39;re sure you&#39;re going to be using a specific pen name and your real name is entirely off the table, or if you&#39;ve published under a pen name previously, give that name here. Otherwise, leave pen names for a later discussion."
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="qualification1"
              label="Qualifications"
              description="Do you have any professional qualifications related to the writing of this novel? These can be university degrees relevant to the subject of your book, writing awards, writing conferences you&#39;ve attended publications in magazines or journals, etc."
              example="I have an MA in Medieval Studies from The University of Nottingham. My short story  &ldquo;Medieval Society&rdquo; was published in The Atlantic last year."
              htmlFor2="qualification2"
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="personalDetail1"
              label="Personal Details"
              description="If you don&#39;t have any &ldquo;official&rdquo; qualifications, what are some other details about your life that will tell an agent &ldquo;this is why you should trust me to tell this story.&rdquo; Try to make these details specific and interesting."
              example="This novel is loosely based on my experience moving from Montgomery, Alabama to Tokyo. I&#39;ve been reading murder mysteries ever since my mom read Murder on the Orient Express to me as a bedtime story when I was six."
              htmlFor2="personalDetail2"
              handleInputChange={this.props.handleInputChange}
            />
            <hr className="section-divider" />
            <h3 className="section-header">Section Five: The Agent</h3>
            <FormItem
              htmlFor="agentName"
              label="Last Name"
              description="You&#39;ll be sending your query to multiple agents, but right now, we&#39;ll focus on one. Your dream agent. What is their last name?"
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="honorific"
              label="Honorific"
              description="What is the honorific you&#39;ll use for this agent? If it is unclear, type their first name."
              example=" Mr., Ms., Dr."
              handleInputChange={this.props.handleInputChange}
            />
            <FormItem
              htmlFor="agentPersonalization"
              label="Agent Personalization"
              description="Is there a specific reason you&#39;re submitting to this agent? This is most relevant when you&#39;ve discussed your project with them (at a conference, online, or elsewhere) or if they&#39;ve requested it during a pitching contest. However, if you&#39;re a fan of their clients or listen to their podcast, say so."
              example="I love how funny Client A&#39;s work is, which makes me believe we have similar senses of humor, you mentioned on twitter that you&#39;re looking for a book about medieval society, you favorited my tweet about this project during PitMad"
              placeholder="I am submitting to you because..."
              handleInputChange={this.props.handleInputChange}
            />
            <div className="pledge">
              <h2 className="pledge__header">The pledge of common sense</h2>
              <p className="pledge__lead">
                Before I receive my query letter, I, the author of my book, do
                hereby swear to actually read and edit it before I even think
                about copy and pasting an auto-generated form letter into an
                email and sending it on to a real-life agent. Of course I do.
                Why are you making me read this?
              </p>
              <Link to="/template">
                <input
                  type="submit"
                  value="Show Me My Query"
                  className="link"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
