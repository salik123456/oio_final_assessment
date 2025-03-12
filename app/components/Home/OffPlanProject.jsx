"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const OffPlanProject = () => {
  const slides = [
    {
      title: "SAADIYAT LAGOONS",
      image: "/offplan.png",
      villaTypes: [
        "4 BHK VILLA + MAID'S",
        "5 BHK VILLA + MAID'S",
        "6 BHK VILLA + MAID'S",
      ],
      description:
        "Explore The Adventure Park, Stroll Across The Stunning Eco-corniche, Soak In Unparalleled Cultural Experiences—In A Choice Of 4 To 6-bed Villas Surrounded By Over 900,000m2 Of Protected Wilderness.",
      startingPrice: "AED 6,200,000",
      bedrooms: "4, 5, 6",
      areaSize: "4,960 SQ FT",
    },
    {
      title: "SAADIYAT LAGOONS 2",
      image: "/offplan.png", 
      villaTypes: [
        "3 BHK VILLA + MAID'S",
        "4 BHK VILLA + MAID'S",
        "5 BHK VILLA + MAID'S",
      ],
      description: "Another amazing description for the second slide.",
      startingPrice: "AED 5,500,000",
      bedrooms: "3, 4, 5",
      areaSize: "4,500 SQ FT",
    },
    {
      title: "SAADIYAT LAGOONS 3",
      image: "/offplan.png", 
      villaTypes: [
        "1 BHK VILLA + MAID'S",
        "4 BHK VILLA + MAID'S",
        "5 BHK VILLA + MAID'S",
      ],
      description: "Another amazing description for the second slide.",
      startingPrice: "AED 2,500,000",
      bedrooms: "3, 4, 5,6",
      areaSize: "4,900 SQ FT",
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className=" mx-auto container px-2 py-12">
      <h2 className="lg:text-5xl text-4xl border-l-[2px] pl-2 border-secondary font-semibold text-dark flex items-center mb-8">
        <span className="w-1 h-[50px] bg-secondary mr-3 hidden"></span>
        OFF-PLAN PROJECT
      </h2>
      <div className="relative py-10 px-8 bg-gray-200">
        <div className="flex justify-between items-center bg-gray-200 mb-6">
          <button
            onClick={prevSlide}
            className="text-gray-600 bg-gray-300 rounded-lg p-2 hover:text-gray-800 cursor-pointer"
          >
            <IoIosArrowBack className="text-2xl" />
          </button>
          <h3 className="text-3xl font-semibold text-center">
            {slides[currentSlide].title}
          </h3>
          <button
            onClick={nextSlide}
            className="text-gray-600 bg-gray-300 rounded-lg p-2 hover:text-gray-800 cursor-pointer"
          >
            <IoIosArrowForward className="text-2xl" />
          </button>
        </div>
        <div className="flex space-x-4 justify-center mb-6 lg:flex-row flex-col">
          {slides[currentSlide].villaTypes.map((type, index) => (
            <span
              key={index}
              className="text-lg font-medium text-gray-700 text-center lg:text-left cursor-pointer"
            >
              {type}
            </span>
          ))}
        </div>
        <AnimatePresence initial={false} custom={currentSlide}>
          <motion.div
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            className="grid grid-cols-1 container mx-auto bg-gray-200 md:grid-cols-2 "
          >
            <div className="p-6 bg-white rounded-lg flex flex-col justify-center">
              <p className="text-gray-700 mb-4">
                {slides[currentSlide].description}
              </p>
              <p className="text-lg font-semibold mb-2">
                Starting Prices: {slides[currentSlide].startingPrice}
              </p>
              <p className="text-gray-700 mb-2">
                Number of Bedrooms: {slides[currentSlide].bedrooms}
              </p>
              <p className="text-gray-700 mb-4">
                Area Size From {slides[currentSlide].areaSize}
              </p>
              <button className="bg-secondary text-white w-fit px-6 py-3 rounded-full font-semibold">
                Book Your Property
              </button>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OffPlanProject;
