import projectData from "./projectData.json";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOverlay() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <>
      <div className="galleryCard">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="galleryImg"
          onClick={toggleOverlay}
        />
        <h3 className="galleryTitle" onClick={toggleOverlay}>
          {project.title}
        </h3>
      </div>
      {isOpen ? (
        <div className="overlay">
          <div className="overlayContainer">
            <button className="galleryBtn" onClick={toggleOverlay}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <img
              src={project.image}
              alt={project.title}
              className="overlayImg"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="projectLinks">
              <a href={project.siteUrl} target="_blank" className="projectUrl">
                View site
              </a>
              <a href={project.codeUrl} target="_blank" className="projectUrl">
                View code
              </a>
            </div>
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
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}
