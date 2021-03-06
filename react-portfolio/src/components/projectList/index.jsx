import React from "react";

function ProjectList() {
  return (
    <section className="work-wrapper">
      <div className="work-grid-wrapper">
        <div className="item1 background-img-placement placement">
          <a
            className="item-links"
            href="https://guarded-caverns-91294.herokuapp.com/"
            rel="noreferrer"
            target="_blank"
          >
            <div className="text-squares text-squares-big">
              <h4>Artful-Dodger</h4>
              <p>VUE/Javascript/Node/Bootstrap</p>
            </div>
          </a>
        </div>

        <div className="item2 background-img-placement smaller-work placement">
          <a
            className="item-links"
            href="https://ondayko14.github.io/run-buddy/"
            rel="noreferrer"
            target="_blank"
          >
            <div className="text-squares">
              <h4>Run Buddy</h4>
              <p>Html/Css</p>
            </div>
          </a>
        </div>

        <div className="item3 background-img-placement smaller-work placement">
          <a
            className="item-links"
            href="https://ondayko14.github.io/coding-with-cocktails/"
            rel="noreferrer"
            target="_blank"
          >
            <div className="text-squares">
              <h4>Coding With Cocktails!</h4>
              <p>Javascript/Jquery/SASS</p>
            </div>
          </a>
        </div>

        <div className="item4 background-img-placement smaller-work placement">
          <a
            className="item-links"
            href="https://placeholder.com/"
            rel="noreferrer"
            target="_blank"
          >
            <div className="text-squares">
              <h4>Example Project 3</h4>
              <p>Html/Css</p>
            </div>
          </a>
        </div>

        <div className="item5 background-img-placement smaller-work placement">
          <a
            className="item-links"
            href="https://placeholder.com/"
            rel="noreferrer"
            target="_blank"
          >
            <div className="text-squares">
              <h4>Example Project 4</h4>
              <p>Html/Css</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
