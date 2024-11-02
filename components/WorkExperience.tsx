import React from "react";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  experience: Experience[];
};

function WorkExperience({ experience }: Props) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`px-5 2xl:px-10 py-10 4xl:py-20 mx-auto max-w-[1920px] transition-opacity duration-150`}>
      <h3 className="uppercase text-center tracking-[20px] text-grey text-2xl">
        Experience
      </h3>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Autoplay interval in milliseconds
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
          1280: { slidesPerView: 3.5 },
        }}
        modules={[Autoplay, Pagination,Navigation]}
        className="mt-10 w-full"
      >
        {experience?.map((exp) => (
          <SwiperSlide className="!pb-8 xl:!pb-12" key={exp._id}>
            <ExperienceCard experience={exp} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default WorkExperience;
