import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";

const ProjectCard = ({
  id,
  imgUrls,
  title,
  price,
  location,
  projects,
  activeProject,
  setActiveProject,
}) => {
  return (
    <motion.div
      variants={fadeIn(
        "right",
        "spring",
        projects.findIndex((p) => p.id === id) * 0.5,
        0.75
      )}
      className={`relative ${
        activeProject === id
          ? "lg:flex-[3.5] flex-[10]"
          : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[400px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-hidden rounded-lg`}
      onClick={() => setActiveProject(id === activeProject ? null : id)}
    >
    
      <Image
        width={700}
        height={200}
        src={imgUrls[0]}
        alt={title}
        className="absolute w-full h-full object-cover"
      />

      {activeProject !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-10 bottom-4 left-4">
          {title}
        </h3>
      ) : (
        <>
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
            <div className="flex justify-between items-center">
              <div className="text-white">
                <h2 className="text-[32px] font-semibold mb-2">{title}</h2>
                <p className="text-sm mb-2">{location}</p>
              </div>
              <button className="bg-secondary text-md text-white px-6 py-2 rounded-full">
                Discover Projects
              </button>
            </div>
          </div>

          <p className="text-lg font-semibold text-[32px] text-white mb-4 absolute right-0 top-0 p-4">
            {price}
          </p>
        </>
      )}
    </motion.div>
  );
};

export default ProjectCard;
