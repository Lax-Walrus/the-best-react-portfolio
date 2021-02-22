import React from "react";

function Navbar() {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="center brand-logo">
            The Kevin Lyons Experience
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#aboutme">About Me</a>
            </li>
            <li>
              <a
                href="src\utils\images\resumefinal2.pdf"
                target="
              _blank"
                download="KevinsResume.PDF"
              >
                Resume
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kevin-lyons-237a171b9/">
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="Mailto:zinckev@hotmail.com">
                <span>Contact Me</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Lax-Walrus">
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
