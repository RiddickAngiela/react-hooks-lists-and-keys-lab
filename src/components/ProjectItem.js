import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
    {technologies.map(item => {
        return <span key={item} >{item}</span>
      }) }

      </div>
    </div>
  );
}

export default ProjectItem;
