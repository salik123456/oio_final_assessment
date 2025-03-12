"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

const FeaturedAreas = () => {
  const areas = [
    { name: "Yas Island", listings: 74, imageUrl: "/areas/areaone.jpg" },
    { name: "Saadiyat Island", listings: 30, imageUrl: "/areas/areatwo.jpg" },
    { name: "Al Ghadeer", listings: 7, imageUrl: "/areas/areathree.jpg" },
    { name: "Al Reem Island", listings: 43, imageUrl: "/areas/areafour.jpg" },
    { name: "Al Raha Beach", listings: 4, imageUrl: "/areas/areafive.jpg" },
    { name: "Al Maryah Island", listings: 1, imageUrl: "/areas/areasix.jpg" },
  ];

  const [hoveredArea, setHoveredArea] = useState(null);

  const handleMouseEnter = (areaName) => {
    setHoveredArea(areaName);
  };

  const handleMouseLeave = () => {
    setHoveredArea(null);
  };

  const boxVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 10, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className="container mx-auto py-12 px-2 md:px-0">
      <h2 className="lg:text-5xl text-4xl border-l-[2px] pl-2 border-secondary font-semibold text-dark flex items-center mb-8">
        <span className="w-1 h-[50px] bg-secondary mr-3 hidden"></span>
        FEATURED AREAS IN ABU DHABI
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {areas.map((area) => (
          <motion.div
            key={area.name}
            initial="initial"
            whileHover="hover"
            variants={boxVariants}
            className="relative rounded-lg overflow-hidden cursor-pointer"
            onMouseEnter={() => handleMouseEnter(area.name)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              width={400}
              height={400}
              src={area.imageUrl}
              alt={area.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-start">
              <div className="flex flex-row items-center">
                <h3 className="text-lg font-semibold text-white">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-300 ml-2">
                  ({area.listings} listings)
                </p>
                <motion.div
                  initial="initial"
                  animate={hoveredArea === area.name ? "hover" : "initial"}
                  variants={arrowVariants}
                  className="text-secondary mt-1"
                >
                  <IoIosArrowRoundForward size={30} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAreas;
