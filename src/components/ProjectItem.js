import React from "react";
import user from "../data/user";


function ProjectItem({ name, about, technologies }) {


  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {technologies}  {/* render a <span> for each technology in the technologies array */}
      <span>text</span>
     
      </div>
    </div>
  );
}

export default ProjectItem;
