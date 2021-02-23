import React from "react";
import style from "./style.css";
import { Tableturns } from "../../utils/images/";

function ProjectCard(props) {
  return (
    <div className="col m3 card medium">
      <h3> {props.name} </h3>
      <div className="imageContainer card-image">
        <img src={props.src} alt="Thumbnail" />
      </div>
      <div className="textContainer">
        <p>{props.text}</p>
        <a href={props.deploy} alt="Deployed Link">
          Deployed Link:
        </a>
        <br></br>
        <a href={props.github} alt="GitHub Link">
          GitHub Repository:
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
