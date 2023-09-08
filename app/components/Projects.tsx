import { projects } from "../utils/projects";
import Details from "./Details";

const Projects = () => {
  return (
    <div
      id="projects"
      className="
            w-full 
            flex 
            flex-col 
            gap-4
        "
    >
      <h2
        className="
            sticky 
            top-0 
            py-4 
            text-center 
            font-bold 
            text-xl 
            md:text-2xl 
            dark:text-light
        "
      >
        Projects
      </h2>
      <ul id="cards">
        {projects.map(({ id, title, ...props }) => (
          <Details key={id} id={id} title={title} {...props} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
