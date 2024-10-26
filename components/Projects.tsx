import React from "react";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import useIntersectionObserver from "../hooks/useIntersectionObserver"; // Adjust the import path as needed

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <div className="min-h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-grey text-2xl">
        Projects
      </h3>
      <div className="w-full md:mt-0 gap-x-5 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-grey/20 scrollbar-thumb-primary/80">
        {projects.map((project, i) => {
          const { ref, isVisible } = useIntersectionObserver({
            threshold: 0.5,
          });

          return (
            <div
              key={project._id}
              ref={ref}
              className={`w-screen lg:w-1/2 p-5 flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center ${
                isVisible ? "animate-fade-in" : ""
              }`}>
              <img
                className={`rounded-lg w-80 h-52 transition-transform duration-300 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0"
                }`}
                src={urlFor(project.image).url()}
                alt={project.title}
              />
              <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                <h4 className="text-xl font-semibold text-center">
                  <span className="underline decoration-primary/50">
                    Case Study {i + 1} of {projects.length} :
                  </span>
                  <span className="ml-2">{project.title}</span>
                </h4>
                <div className="flex items-center space-x-2 justify-center">
                  {project.technologies.map((tech) => (
                    <img
                      key={tech._id}
                      src={urlFor(tech.image).url()}
                      className="w-8 h-8"
                      alt={tech.title}
                    />
                  ))}
                </div>

                <p className="text-sm md:text-lg text-center md:text-left">
                  {project.summary}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-primary/5 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
