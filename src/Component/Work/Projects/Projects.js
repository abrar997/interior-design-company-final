import React, { Component } from "react";
import "./Projects.css";

export class Projects extends Component {
  render() {
    const { projectss } = this.props;
    const dataprojects = projectss.map((project, ind) => {
      return project.projectType.length > 0 ? (
        <div key={ind} className="projects col-lg-4">
          <img src={project.imgUrl} />
          <div className="sect" data-aos="fade-down">
            <h4>{project.projectType}</h4>
            <h2>{project.name} </h2>
          </div>
        </div>
      ) : (
        <h1>nothing here</h1>
      );
    });


    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <h1>Our Finished Projects</h1>

            <div className="porojectsexample">{dataprojects}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
