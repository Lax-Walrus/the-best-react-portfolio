import Navbar from "./components/Navbar";
import "./App.css";
import ProjectCard from "./components/Projects/index";
import Projects from "./utils/ProjectsJSON/projects.json";
import React, { Component } from "react";
import Aboutme from "./components/Aboutme";

class App extends Component {
  state = { Projects };

  componentDidMount(params) {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div
          className="row cardContainer"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {this.state.Projects.map((project) => (
            <ProjectCard
              name={project.name}
              src={project.src}
              text={project.text}
              deploy={project.deploy}
              github={project.github}
            />
          ))}
          <div className="row">
            <Aboutme />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
