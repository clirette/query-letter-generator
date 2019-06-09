import React from "react";
import { report } from "../helpers/ga";
import Header from "./Header";

const Advice = () => {
  window.scrollTo(0, 0);
  report(window.location.pathname);
  return (
    <div className="advice-background">
      <Header />
      <div className="advice-body">
        <h1 className="advice-header">
          What Are &ldquo;The Rules&rdquo; of Query Writing?
        </h1>
        <div className="advice-text-block">
          <p>Generally speaking, when editing your query, remember to:</p>
          <p>
            <strong>
              Include the three mandatory sections: About the Book, Metadata,
              About Me.
            </strong>{" "}
            These are the three main things your query needs to do: Introduce
            your book in a way that will grab the reader’s attention, tell your
            reader where your book fits in “The Market,” and let your reader
            know who wrote the book. Hopefully the Query Generator has helped
            you with that.
          </p>
          <p>
            <strong>Use business letter formatting.</strong> 12 point font.
            Single spaced. Left alignment. A space between paragraphs. If you’re
            emailing the query, stick to your email service’s default font and
            size: “Sans Serif” and “Normal.”{" "}
          </p>
          <p>
            <strong>Keep it short. 250-400 words.</strong> Remember your goal:
            to get the agent to pick up the first chapter. Agents can receive
            hundreds of queries in a week. They don’t have time for wasted
            words. They won’t wait for you to get to your point. Be efficient.
          </p>
        </div>
        <hr className="section-divider" />
        <h1 className="advice-header">Query Tips</h1>
        <div className="advice-text-block">
          <p>
            <strong>
              Highlight your writing ability with narrative voice.
            </strong>{" "}
            If your story is funny, make sure your query reflects that. If the
            writing is lyrical, your query should be too.
          </p>
          <p>
            <strong>Leave themes out of it.</strong> Don’t say this is a story
            about “friendship and the power or love,” or “children will relate
            to this story of bullying.” Don’t analyse your manuscript for your
            reader. Let the story speak for itself. If you want the main theme
            of your novel to come across, make sure the conflict your
            protagonist is facing reflects it.
          </p>
          <p>
            <strong>Use active language.</strong> Don’t use phrases like “this
            story is about” or “the main character is.” Again, let the plot and
            the character’s actions speak for themselves.
          </p>
          <p>
            <strong>Try not to throw in too many proper nouns.</strong> If
            you’re querying Harry Potter, you’ll want to use Harry’s name in the
            query, but Aunt Petunia and Uncle Dursley can be “his cruel
            relatives.” It’s a writer’s instinct to want to call things by the
            creative, world building names we’ve given them, but the more names,
            locations, and special terms in your query, the more difficult to
            follow it will be.
          </p>
        </div>
        <hr className="section-divider" />
        <h1 className="advice-header">And When I’m Finished Editing?</h1>
        <div className="advice-text-block">
          <p>
            Congrats! Now here are some extra things to do before you send it
            off:
          </p>
          <p>
            <strong>
              Have someone else look over your query before you send it out.
            </strong>{" "}
            Share it with the smartest person you know. An old English teacher.
            A writing website, like{" "}
            <a
              href="https://reddit.com/r/writers"
              target="_blank"
              rel="noopener noreferrer"
            >
              r/writers
            </a>
            . Have them judge it on clarity and quality.
          </p>
          <p>
            <strong>Use a site like QueryTracker or Manuscript Wishlist</strong>{" "}
            to make a list of agents to send your query out to. Query Tracker
            will even help you track who your query has gone out to, how long
            it’s gone out, and how long it typically takes for that agent to
            respond.
          </p>
          <p>
            <strong>
              Have someone look over the first few chapters of your manuscript
              while you’re compiling a submission list.
            </strong>{" "}
            Your query can be the best query in the world, but it doesn’t matter
            if your first couple of chapters can’t match it. Figure out the
            largest selection the agents you’re querying want attached, and
            polish those chapters. Make them shine. Find a trusted friend to
            look over them. If you don’t have any writer buddies, find a friend
            with similar tastes and give them a few pointed questions to get the
            feedback you need:
          </p>
          <ul className="advice-list">
            <li>Does the opening paragraph hook you?</li>
            <li>
              Do you feel like you’re entering the story too early? Too late?
            </li>
            <li>Do the characters feel real and relatable? Why or why not?</li>
            <li>
              Where is your interest piqued? What parts did you enjoy the most?
            </li>
            <li>What paragraphs are you skimming? Where are you bored?</li>
            <li>
              Do you have any trouble following the story? Where are you
              confused?
            </li>
          </ul>
          <p>
            <strong>Make sure your ENTIRE manuscript is ready.</strong> Don’t
            start sending queries with the expectation that it’ll take a few
            months to get responses, and that you’ll be able to finish your book
            in that time frame. It’s possible you’ll get a full manuscript
            request <em>the very day you send your query out</em>. It happens,
            and you don’t want to miss out on a dream agent because of it.
          </p>
          <p>
            It’s okay if the book isn’t perfect--no book is, but it should be
            both <span className="underline">100% complete</span> and{" "}
            <span className="underline">as good as you’re able to make it</span>{" "}
            without editorial advice from an agent/editor.
          </p>
          <p>
            <strong>Triple-check the agents’ name is spelled correctly.</strong>{" "}
            While some are lenient about a mistake this, others aren’t. Don’t
            give them a reason to discount your query in the first line.
          </p>
          <p>
            <strong>Triple-check the agents’ submission requirements.</strong>
            Every agency will probably have slightly different requirements, so
            make sure you’re following the right directions.
          </p>
        </div>
        <hr className="section-divider" />
        <h1 className="advice-header">Additional Resources</h1>
        <ul className="advice-list">
          <li>
            <a
              href="http://letswritesomenovels.tumblr.com/post/137938985858"
              rel="noopener noreferrer"
              target="_blank"
            >
              Writing a Six Sentence Synopsis
            </a>
          </li>
          <li>
            <a
              href="https://www.agentquery.com/writer_hq.aspx"
              rel="noopener noreferrer"
              target="_blank"
            >
              How to Write a Query Letter
            </a>
          </li>
          <li>
            <a
              href="https://www.writersdigest.com/online-editor/how-to-write-the-perfect-query-letter"
              rel="noopener noreferrer"
              target="_blank"
            >
              How to Write the Perfect Query - Writer Advice
            </a>
          </li>
          <li>
            <a
              href="http://www.publishingcrawl.com/2016/02/18/pubcrawl-podcast-publishing-201-the-anatomy-of-a-query-letter/"
              rel="noopener noreferrer"
              target="_blank"
            >
              The Anatomy of a Query Letter
            </a>
          </li>
          <li>
            <a
              href="https://player.fm/series/33514/45965404"
              rel="noopener noreferrer"
              target="_blank"
            >
              The Narrative Breakdown
            </a>
          </li>
          <li>
            <a
              href="http://www.manuscriptwishlist.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Manuscript Wishlist
            </a>
          </li>
          <li>
            <a
              href="https://querytracker.net/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Query Tracker
            </a>
          </li>
          <li>
            <a
              href="https://www.writersdigest.com/editor-blogs/guide-to-literary-agents/word-count-for-novels-and-childrens-books-the-definitive-post"
              rel="noopener noreferrer"
              target="_blank"
            >
              Word Count for Novels: the Definitive Post
            </a>
          </li>
          <li>
            <a
              href="http://authornews.penguinrandomhouse.com/comp-titles-an-elevator-pitch-for-your-book/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Comp Titles: an Elevator Pitch for your Book
            </a>
          </li>
          <li>
            <a
              href="https://queryshark.blogspot.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Query Shark Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Advice;
