import React, { Component } from "react";
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
        Dear [Ms.] [Agent],
        <br />
        <br />
        [A fearsome dragon. A knight in shining armor. ]...
        <br />
        <br />
        [22]-year-old [secret dragon] [Elsie Fire] just wants [a quiet life as
        an editorial assistant in New York City], but when [a man bothers her on
        the subway], [Elsie] [accidentally breathes fire on him]. Now [Elsie]
        [must face a world that knows her secret].
        <br />
        <br />
        As [Elsie] [navigates her new life as a known dragon], [she] discovers
        [she enjoys finally feeling free to be a real dragon]. [Elsie] is put to
        the test when [she finds that everything she does—from using her fire to
        heat her soup to hoarding silver spoons in her studio apartment—only
        turns society further against her], and when [the man returns as knight
        in shining armor to slay her],[she] has to [admit she’s become the
        villain of her own story] or [show the world that the stories have
        always been wrong and knights in shining armor are not what they seem].
        <br />
        <br />
        Complete at [70,000] words, [ELSIE FIRE: DRAGON] is a/n [adult] [low
        fantasy] set in [a fairy-tale inspired version of modern day New York].
        It will appeal to fans of [Seraphina by Rachel Hartman] and [The Devil
        Wears Prada by Laura Weisberger]. [ELSIE FIRE: DRAGON] has potential for
        a sequel following [Elsie]’s story as [she] continues to [explore her
        dragon powers in a world where only metal-clad men are called heroes].
        <br />
        <br />
        I am submitting [ELSIE FIRE: DRAGON] to you because [you mentioned on
        twitter wanting a book about women getting revenge on the men who harass
        them on public transport].
        <br />
        <br />
        [I have a BA in Creative Writing from Fiction University]. [My stories
        have been published in Women Strike Back and Dragons Monthly] [I have
        more than once wanted to breathe fire on a man who wouldn’t stop
        bothering me.] [Optional Personal Detail 2.]
        <br />
        <br />
        Thank you for your consideration. Yours sincerely, [Julia Marcie]
        (writing as [Eisle Erif])
      </p>,
      <p className="template-examples__text">
        Dear [Mr.] [Agent],
        <br />
        <br />
        [He’s robbed three banks, two trains, and a jewelry store without
        getting caught. Now, he’s locked up anyway]...
        <br />
        <br />
        [101]-year-old [conman] [Deeby Cooper] just wants [to rob $1,000,000
        from the bank across from his house and use the money to spend his last
        years sipping Mai Tais in Fiji], but when [his great-grandchildren throw
        him in a nursing home], [Deeby] [sees that his last great con isn’t
        going to be a robbery, but an escape]. Now, [Deeby] [has to prepare to
        steal the greatest prize of all—himself].
        <br />
        <br />
        As [Deeby] [formulates his escape], [he] discovers [a number of fellow
        inmates also want in—or out: Major Schmitty, a retired Navy Seal; Judy,
        a gossip who knows everything there is to known about the CNAs;
        Huguette, who’s multiple hip-fractures mean frequent trips in and out of
        the facility, and Jason, an activities coordinator and vegan who
        believes no one should be caged up ]. [Deeby] is tested when [he
        discovers that not only is Shady Pines’ security tighter than a diamond
        shop’s, but there’s a snitch in his group], and when [the night of the
        great escape finally comes], [he] has to [get out] or [break a hip
        trying].
        <br />
        <br />
        Complete at [55,000] words, [THE GRAY ESCAPE] is a(n) [adult]
        [comedy-heist] set in [a small-town nursing home in Kentucky]. It will
        appeal to fans of [The Golden Girls] and [Oceans 11]. [THE GRAY ESCAPE]
        has potential for a sequel following [Deeby]’s story as [he] continues
        to [live life to the fullest in his second century].
        <br />
        <br />
        I am submitting [THE GRAY ESCAPE] to you because [we spoke at The
        Writing Conference and you seemed interested in the story during our
        discussion there]. [I have a BA in criminology].
        <br />
        <br />
        [I also worked at a nursing home for two years.] [This book was inspired
        over questions about my own grandfather being D.B. Cooper in disguise.]
        <br />
        <br />
        Thank you for your consideration. Yours sincerely, [Chase Cooper]
        (writing as [Chase Casino])
      </p>
    ];
  }

  changeExample = e => {
    e.preventDefault();
    this.setState({
      examplesIndex: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="example-container">
          <div className="example">
            <h1 className="example__header">Template</h1>
            <p className="template-examples__text">
              Dear [Honorific] [Agent Name],
              <br />
              <br />
              [Tagline]...
              <br />
              <br />
              [Age]-year-old [Defining Characteristic] [Full Name] just wants
              [Hopes and Dreams], but when [Inciting Incident], [Chosen Name]
              [Incited Action]. Now, [Chosen Name] [Updated Purpose].
              <br />
              <br />
              As [Chosen Name] [The New Normal], [Pronoun] discovers [New
              Discoveries]. [Chosen Name] is put to the test when [Initial
              Challenge(s) faced], and when [Greatest Challenge], [Pronoun] has
              to [Outcome 1] or [Outcome 2].
              <br />
              <br />
              Complete at [Word Count] words, [TITLE] is a(n) [category] [genre]
              set in [setting]. It will appeal to fans of [Comp 1] and [Comp 2].
              [TITLE] has potential for a sequel following [Chosen Name]’s story
              as [Pronoun] continues to [Sequels].
              <br />
              <br />
              I am submitting [TITLE] to you because [Optional Agent
              Personalization].
              <br />
              <br />
              [Optional Qualification 1]. [Optional Qualification 2.] [Optional
              Personal Detail 1.] [Optional Personal Detail 2.]
              <br />
              <br /> Thank you for your consideration. Yours sincerely, [Author
              Name] (writing as [Pen Name])
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
