import projectData from "./projectData.json";
import { useState } from "react";

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="galleryCard">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="galleryImg"
        />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank">
          Link to GitHub
        </a>
        <button className="galleryBtn" onClick={() => setIsOpen(true)}>
          View details
        </button>
      </div>
      {isOpen ? (
        <div className="overlay">
          <div className="overlayContainer">
            <p>Pictures go here - todo later</p>
            <h3>{project.title}</h3>
            <button className="galleryBtn" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default function Gallery() {
  const projects = projectData.projects;

  return (
    <div className="container">
      <h2>Portfolio</h2>
      <div className="gallery">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
