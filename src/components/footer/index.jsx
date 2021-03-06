import React from 'react';

function Footer() {
  return (
    <footer>
        <ul>
            <a href="tel:7405023449" className="nav-animation">
                <li className="bottom-list-border-footer">
                    740-502-3449
                </li>
            </a>
            <a href="mailto:b.ondayko@gmail.com" className="nav-animation">
                <li className="bottom-list-border-footer">
                    b.ondayko@gmail.com
                </li>
            </a>
            <a href="https://github.com/Ondayko14" rel="noreferrer" target="_blank" className="nav-animation">
                <li className="bottom-list-border-footer">
                    Github
                </li>
            </a>
        </ul>
    </footer>
  );
}

export default Footer;