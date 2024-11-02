import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver"; // Adjust the import path as needed

type Props = {};

function BackgroundCircle({}: Props) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`relative flex justify-center items-center ${
        isVisible ? "animate-circles" : ""
      }`}>
      <div className="absolute border border-light rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-light rounded-full h-[300px] w-[300px] mt-52 " />
      <div className="absolute border border-light rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute rounded-full border border-primary opacity-20 h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-light rounded-full h-[800px] w-[800px] mt-52" />
    </div>
  );
}

export default BackgroundCircle;
