import React from 'react';

function Nav() {
    const scrollToAbout = () => {
        window.scrollTo(0,500)
      }

    const scrollToWork = () => {
        window.scrollTo(0,1000)
      }

  return (
<header>
        <h1>Brandon Ondayko</h1>
        <nav>
            <ul>
                <a href="#about" onClick={scrollToAbout} class="nav-animation">
                    <li class="bottom-list-border">
                    About Me
                    </li>
                </a>
                <a href="#work" onClick={scrollToWork} class="nav-animation">
                    <li class="bottom-list-border">
                    Work
                    </li>
                </a>
                <a href="#contact" class="nav-animation">
                    <li class="bottom-list-border">
                    Contact
                    </li>    
                </a>
                <a href="" target="_blank" class="nav-animation">
                    <li class="bottom-list-border">
                    Resume
                    </li>
                </a>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;