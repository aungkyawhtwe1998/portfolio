"use client";
import React from "react";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <div className="px-5 lg:px-10 py-10 4xl:py-20 mx-auto max-w-[1920px] transition-opacity">
      <div className="">
        <h3 className="uppercase mb-10 text-center tracking-[20px] text-grey text-2xl">
          Projects
        </h3>
        <Swiper
          spaceBetween={20}
          autoplay={{
            delay: 3000, // Slide change delay in milliseconds
            disableOnInteraction: false, // Keeps autoplay running after user interaction
          }}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1920: { slidesPerView: 2 },
          }}
          navigation={true}
          pagination={true}
          history={{
            key: "slide",
          }}
          modules={[Autoplay, Navigation, Pagination]}>
          {projects?.map((project, i) => (
            <SwiperSlide
              key={i}
              className="!pb-8 lg:!pb-14">
              <div className="p-5 flex bg-accent text-dark rounded-lg xl:p-5 flex-col lg:flex-row gap-5 justify-center items-center">
                <Image
                  width={450}
                  height={400}
                  priority
                  className="rounded-lg aspect-[450/400] max-w-[250px] md:max-w-[450px] bg-center object-cover"
                  src={project.image && urlFor(project.image).url()}
                  alt={project.title}
                />
                <div className="space-y-5 text-start 4xl:px-10">
                  <div>
                    <h4 className="text-xl font-semibold">
                      Case Study {i + 1} of {projects.length}:
                    </h4>
                    <h4 className="text-xl font-semibold">{project.title}</h4>
                  </div>
                  <div className="flex items-center space-x-2 justify-start">
                    {project.technologies.map((tech) => (
                      <Image
                        key={tech._id}
                        src={tech.image && urlFor(tech.image).url()}
                        className="w-6 h-6"
                        width={24}
                        height={24}
                        alt={tech.title}
                      />
                    ))}
                  </div>
                  <p className="text-sm md:text-lg text-left line-clamp-5">
                    {project.summary}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full absolute top-[30%] bg-primary/5 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
