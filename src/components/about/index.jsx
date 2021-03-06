import React from "react";
import Hero from "../hero";

function About() {
  return (
    <div>
      <Hero />
      <div className="about-me-container">
        {console.log("insideAbout")}
        <h1>About Me</h1>
        <article className="about-me-wrapper" id="About">
          <p>
            I am a Full Stack Developer currently enrolled in the Vanderbilt
            Coding Bootcamp.
          </p>
          <p>
            I have experience in Javascript/Node/NOSQL/SQL/React/Vue along with
            several CSS frameworks.
          </p>
          <p>
            Application development is a passion of mine, and it feels so good
            to get to do it on a daily basis.
          </p>
          <p>
            I hope you enjoy browsing my projects and if you have any questions,
            please feel free to contact me.
          </p>
        </article>
      </div>
    </div>
  );
}

export default About;
