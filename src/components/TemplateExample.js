import React, { Component } from "react";
import { report } from "../helpers/ga";

import Header from "./Header";

/**
 * Span colors:
 * PRIMARY #8fbab1
 * SECONDARY #4f3876
 */
class TemplateExample extends Component {
  constructor(props) {
    super(props);
    this.state = { examplesIndex: 0 };
    this.examples = [
      <p className="template-examples__text">
        Dear <span className="placeholders--1">[Ms.]</span>{" "}
        <span className="placeholders--2">[Agent]</span>,
        <br />
        <br />
        <span className="placeholders--1">
          [A fearsome dragon. A knight in shining armor]
        </span>
        ...
        <br />
        <br />
        <span className="placeholders--2">[22]</span>-year-old{" "}
        <span className="placeholders--1">[secret dragon]</span>{" "}
        <span className="placeholders--2">[Elsie Fire]</span> just wants{" "}
        <span className="placeholders--1">
          [a quiet life as an editorial assistant in New York City]
        </span>
        , but when{" "}
        <span className="placeholders--2">
          [a man bothers her on the subway]
        </span>
        , <span className="placeholders--1">[Elsie]</span>{" "}
        <span className="placeholders--2">
          [accidentally breathes fire on him]
        </span>
        . Now <span className="placeholders--1">[Elsie]</span>{" "}
        <span className="placeholders--2">
          [must face a world that knows her secret]
        </span>
        .
        <br />
        <br />
        As <span className="placeholders--1">[Elsie]</span>{" "}
        <span className="placeholders--2">
          [navigates her new life as a known dragon]
        </span>
        , <span className="placeholders--1">[she]</span> discovers{" "}
        <span className="placeholders--2">
          [she enjoys finally feeling free to be a real dragon]
        </span>
        . <span className="placeholders--1">[Elsie]</span> is put to the test
        when
        <span className="placeholders--2">
          [she finds that everything she does—from using her fire to heat her
          soup to hoarding silver spoons in her studio apartment—only turns
          society further against her]
        </span>
        , and when{" "}
        <span className="placeholders--1">
          [the man returns as knight in shining armor to slay her]
        </span>
        ,<span className="placeholders--2">[she]</span> has to{" "}
        <span className="placeholders--1">
          [admit she’s become the villain of her own story]
        </span>{" "}
        or{" "}
        <span className="placeholders--2">
          [show the world that the stories have always been wrong and knights in
          shining armor are not what they seem]
        </span>
        .
        <br />
        <br />
        Complete at <span className="placeholders--1">[70,000]</span> words,
        <span className="placeholders--2">[ELSIE FIRE: DRAGON]</span> is a/n{" "}
        <span className="placeholders--1">[adult]</span>{" "}
        <span className="placeholders--2">[low fantasy]</span> set in{" "}
        <span className="placeholders--1">
          [a fairy-tale inspired version of modern day New York]
        </span>
        . It will appeal to fans of{" "}
        <span className="placeholders--2">[Seraphina by Rachel Hartman]</span>{" "}
        and{" "}
        <span className="placeholders--1">
          [The Devil Wears Prada by Laura Weisberger]
        </span>
        . <span className="placeholders--2">[ELSIE FIRE: DRAGON]</span> has
        potential for a sequel following{" "}
        <span className="placeholders--1">[Elsie]</span>’s story as{" "}
        <span className="placeholders--2">[she]</span>
        continues to{" "}
        <span className="placeholders--1">
          [explore her dragon powers in a world where only metal-clad men are
          called heroes]
        </span>
        .
        <br />
        <br />I am submitting{" "}
        <span className="placeholders--2">[ELSIE FIRE: DRAGON]</span> to you
        because{" "}
        <span className="placeholders--1">
          [you mentioned on twitter wanting a book about women getting revenge
          on the men who harass them on public transport]
        </span>
        .
        <br />
        <br />
        <span className="placeholders--2">
          [I have a BA in Creative Writing from Fiction University]
        </span>
        .{" "}
        <span className="placeholders--1">
          [My stories have been published in Women Strike Back and Dragons
          Monthly]
        </span>
        .{" "}
        <span className="placeholders--2">
          [I have experience as an editorial assistant]
        </span>
        .{" "}
        <span className="placeholders--1">
          [I also have more than once wanted to breathe fire on a man who
          wouldn’t stop bothering me]
        </span>
        .
        <br />
        <br />
        Thank you for your consideration.
        <br />
        <br />
        Yours sincerely,
        <br />
        <br />
        <span className="placeholders--2">[Julia Marcie]</span> (writing as{" "}
        <span className="placeholders--1">[Eisle Erif]</span>)
      </p>,
      <p className="template-examples__text">
        Dear <span className="placeholders--1">[Mr.]</span>{" "}
        <span className="placeholders--2">[Agent]</span>,
        <br />
        <br />
        <span className="placeholders--1">
          [He’s robbed three banks, two trains, and a jewelry store without
          getting caught. Now, he’s locked up anyway]
        </span>
        ...
        <br />
        <br />
        <span className="placeholders--2">[101]</span>-year-old{" "}
        <span className="placeholders--1">[conman]</span>{" "}
        <span className="placeholders--2">[Deeby Cooper]</span> just wants{" "}
        <span className="placeholders--1">
          [to rob $1,000,000 from the bank across from his house and use the
          money to spend his last years sipping Mai Tais in Fiji]
        </span>
        , but when{" "}
        <span className="placeholders--2">
          [his great-grandchildren throw him in a nursing home]
        </span>
        , <span className="placeholders--1">[Deeby]</span>{" "}
        <span className="placeholders--2">
          [sees that his last great con isn’t going to be a robbery, but an
          escape]
        </span>
        . Now, <span className="placeholders--1">[Deeby]</span>{" "}
        <span className="placeholders--2">
          [has to prepare to steal the greatest prize of all—himself]
        </span>
        .
        <br />
        <br />
        As <span className="placeholders--1">[Deeby]</span>{" "}
        <span className="placeholders--2">[formulates his escape]</span>,{" "}
        <span className="placeholders--1">[he]</span> discovers{" "}
        <span className="placeholders--2">
          [a number of fellow inmates also want in—or out: Major Schmitty, a
          retired Navy Seal; Judy, a gossip who knows everything there is to
          known about the CNAs; Huguette, who’s multiple hip-fractures mean
          frequent trips in and out of the facility, and Jason, an activities
          coordinator and vegan who believes no one should be caged up ]
        </span>
        . <span className="placeholders--1">[Deeby]</span> is tested when{" "}
        <span className="placeholders--2">
          [he discovers that not only is Shady Pines’ security tighter than a
          diamond shop’s, but there’s a snitch in his group]
        </span>
        , and when{" "}
        <span className="placeholders--1">
          [the night of the great escape finally comes]
        </span>
        , <span className="placeholders--2">[he]</span> has to{" "}
        <span className="placeholders--1">[get out]</span> or
        <span className="placeholders--2">[break a hip trying]</span>.
        <br />
        <br />
        Complete at <span className="placeholders--1">[55,000]</span> words,
        <span className="placeholders--2">[THE GRAY ESCAPE]</span> is a(n){" "}
        <span className="placeholders--1">[adult]</span>
        <span className="placeholders--2">[comedy-heist]</span> set in{" "}
        <span className="placeholders--1">
          [a small-town nursing home in Kentucky]
        </span>
        . It will appeal to fans of{" "}
        <span className="placeholders--2">[The Golden Girls]</span> and{" "}
        <span className="placeholders--1">[Oceans 11]</span>.{" "}
        <span className="placeholders--2">[THE GRAY ESCAPE]</span>
        has potential for a sequel following{" "}
        <span className="placeholders--1">[Deeby]</span>’s story as{" "}
        <span className="placeholders--2">[he]</span>
        continues to{" "}
        <span className="placeholders--1">
          [live life to the fullest in his second century]
        </span>
        .
        <br />
        <br />I am submitting{" "}
        <span className="placeholders--2">[THE GRAY ESCAPE]</span> to you
        because{" "}
        <span className="placeholders--1">
          [we spoke at The Writing Conference and you seemed interested in the
          story during our discussion there]
        </span>
        . <span className="placeholders--2">[I have a BA in criminology]</span>.
        <br />
        <br />
        <span className="placeholders--1">
          [I also worked at a nursing home for two years]
        </span>
        .{" "}
        <span className="placeholders--2">
          [This book was inspired over questions about my own grandfather being
          D.B. Cooper in disguise]
        </span>
        .
        <br />
        <br />
        Thank you for your consideration.
        <br />
        <br />
        Yours sincerely,
        <br />
        <br />
        <span className="placeholders--1">[Chase Cooper]</span> (writing as
        <span className="placeholders--2">[Chase Casino]</span>)
      </p>
    ];
  }

  changeExample = e => {
    e.preventDefault();
    this.setState({
      examplesIndex: e.target.value
    });
  };

  componentDidMount() {
    report(window.location.pathname);
  }

  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Header />
        <div className="example-container">
          <div className="example">
            <h1 className="example__header">Template</h1>
            <p className="template-examples__text example-left">
              Dear <span className="placeholders--1">[Honorific]</span>{" "}
              <span className="placeholders--2">[Agent Name]</span>,
              <br />
              <br />
              <span className="placeholders--1">[Tagline]</span>...
              <br />
              <br />
              <span className="placeholders--2">[Age]</span>-year-old{" "}
              <span className="placeholders--1">[Defining Characteristic]</span>{" "}
              <span className="placeholders--2">[Full Name]</span> just wants
              <span className="placeholders--1">[Hopes and Dreams]</span>, but
              when <span className="placeholders--2">[Inciting Incident]</span>,{" "}
              <span className="placeholders--1">[Chosen Name]</span>{" "}
              <span className="placeholders--2">[Incited Action]</span>. Now,{" "}
              <span className="placeholders--1">[Chosen Name]</span>{" "}
              <span className="placeholders--2">[Updated Purpose]</span>.
              <br />
              <br />
              As <span className="placeholders--1">[Chosen Name]</span>{" "}
              <span className="placeholders--2">[The New Normal]</span>,{" "}
              <span className="placeholders--1">[Pronoun]</span> discovers{" "}
              <span className="placeholders--2">[New Discoveries]</span>.{" "}
              <span className="placeholders--1">[Chosen Name]</span> is put to
              the test when{" "}
              <span className="placeholders--2">
                [Initial Challenge(s) faced]
              </span>
              , and when{" "}
              <span className="placeholders--1">[Greatest Challenge]</span>,{" "}
              <span className="placeholders--2">[Pronoun]</span> has to{" "}
              <span className="placeholders--1">[Outcome 1]</span> or{" "}
              <span className="placeholders--2">[Outcome 2]</span>.
              <br />
              <br />
              Complete at <span className="placeholders--1">
                [Word Count]
              </span>{" "}
              words, <span className="placeholders--2">[TITLE]</span> is a(n){" "}
              <span className="placeholders--1">[category]</span>{" "}
              <span className="placeholders--2">[genre]</span>
              set in <span className="placeholders--1">[setting]</span>. It will
              appeal to fans of{" "}
              <span className="placeholders--2">[Comp 1]</span> and{" "}
              <span className="placeholders--1">[Comp 2]</span>.{" "}
              <span className="placeholders--2">[TITLE]</span> has potential for
              a sequel following{" "}
              <span className="placeholders--1">[Chosen Name]</span>’s story as{" "}
              <span className="placeholders--2">[Pronoun]</span> continues to{" "}
              <span className="placeholders--1">[Sequels]</span>.
              <br />
              <br />I am submitting{" "}
              <span className="placeholders--2">[TITLE]</span> to you because{" "}
              <span className="placeholders--1">
                [Optional Agent Personalization]
              </span>
              .
              <br />
              <br />
              <span className="placeholders--2">
                [Optional Qualification 1]
              </span>
              .{" "}
              <span className="placeholders--1">
                [Optional Qualification 2]
              </span>
              .{" "}
              <span className="placeholders--2">
                [Optional Personal Detail 1]
              </span>
              .{" "}
              <span className="placeholders--1">
                [Optional Personal Detail 2]
              </span>
              .
              <br />
              <br />
              Thank you for your consideration.
              <br />
              <br />
              Yours sincerely,
              <br />
              <br />
              <span className="placeholders--2">[Author Name]</span> (writing as{" "}
              <span className="placeholders--1">[Pen Name]</span>)
            </p>
          </div>
          <div className="template-examples">
            <h1 className="example__header">Example Query</h1>
            <div className="example__buttons-container">
              <div className="example__buttons">
                {this.state.examplesIndex == 1 && (
                  <button onClick={this.changeExample} value="0">
                    &lt;
                  </button>
                )}
                {this.state.examplesIndex == 0 && (
                  <button onClick={this.changeExample} value="1">
                    &gt;
                  </button>
                )}
              </div>
            </div>
            {this.examples[this.state.examplesIndex]}
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateExample;
