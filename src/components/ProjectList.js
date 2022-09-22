import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map(project => {
        const { name, about, technologies } = project
        return <ProjectItem key={project.id} name={name} about={about} technologies={technologies}/>
      }) }</div>
    </div>
  );
}

export default ProjectList;
