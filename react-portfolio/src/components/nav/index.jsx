import { React } from "react";

function Nav({ handlePageChange }) {
  return (
    <header>
      <h1>Brandon Ondayko</h1>
      <nav>
        <ul>
          <li
            className="bottom-list-border"
            onClick={() => {
              handlePageChange("About");
            }}
          >
            About Me
          </li>
          <li
            className="bottom-list-border"
            onClick={() => {
              handlePageChange("Work");
            }}
          >
            Work
          </li>
          <li
            className="bottom-list-border"
            onClick={() => {
              handlePageChange("Contact");
            }}
          >
            Contact
          </li>
          <a
            href="#resume"
            rel="noreferrer"
            target="_blank"
            className="nav-animation"
          >
            <li className="bottom-list-border">Resume</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
