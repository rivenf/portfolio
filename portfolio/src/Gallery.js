import projectData from "./projectData.json";

function ProjectCard({ project }) {
  return (
    <div className="galleryCard">
      <img src={project.thumbnail} alt={project.title} className="galleryImg" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank">
        Link to GitHub
      </a>
    </div>
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
