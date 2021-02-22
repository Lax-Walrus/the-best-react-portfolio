import React from "react";

function Aboutme() {
  return (
    <div id="card" className="card large">
      <div className="inner">
        <a href="#" className="image">
          <img
            src="https://github.com/Lax-Walrus/KDL-Portfolio2/blob/main/images/IMG_6200_small.jpg?raw=true"
            alt="Picture of me"
            height="200px"
            width="250px"
          />
        </a>
        <div className="content">
          <h3 className="major" style={{ textAlign: "center" }}>
            About Me:
          </h3>
          <p>
            I am a self motivated junior developer in the pacific northwest. I'm
            looking for a full stack position to help grow your customer base
            and deliver a superior customer experience online. I commend myself
            for being a quick learner, a great team member in group work and
            always devoted to creating the best product I can. My recurring goal
            is improve my knowledge using every opportunity to hone my skills,
            knowledge and new languages
          </p>
        </div>
      </div>
    </div>
  );
}
export default Aboutme;
