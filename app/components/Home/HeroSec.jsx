'use client'
import React, { useState } from "react";
import Image from "next/image";
import Counter from "../Global/Counter";
import Button from "../UI/Button";
import PropertyFilter from "./PropertyFilter";

const HeroSec = () => {
  const [filteredProperties, setFilteredProperties] = useState([]); 

  
 
  const heroHeight = filteredProperties.length > 0 ? "lg:h-[800px] h-[229vh]" : "lg:h-[700px] h-[160vh]";

  return (
    <section className={`relative  md:h-[600px] ${heroHeight} bg-gray-100`}>
      <Image
        src="/herosec.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute container mx-auto inset-0 md:flex flex-col justify-around items-center text-white p-4">
        <div className="flex lg:flex-row flex-col justify-between items-center w-full">
          <div className="lg:w-3/4 w-full text-left">
            <h1 className="text-3xl md:text-5xl lg:text-[54px] font-semibold text-left mb-6">
              DISCOVER YOUR MOST COMFORT PLACE FOR YOUR FUTURE LIFE
            </h1>
            <div className="flex flex-wrap w-full lg:w-[70%] rounded-md p-4 lg:p-8 bg-[#80808091] justify-center lg:justify-between gap-4 mb-8">
              <div className="flex flex-col lg:text-auto text-center lg:flex-row items-center lg:border-r lg:pr-3">
                <span className="text-4xl font-semibold">
                  <Counter end={5} />
                </span>
                <span className="ml-2">
                  POPULAR <br className="lg:flex hidden" /> AREAS
                </span>
              </div>
              <div className="flex flex-col-reverse lg:flex-row items-center">
                <span className="lg:ml-6">
                  PROJECTS <br className="lg:flex hidden" /> COMPLETED
                </span>
                <span className="text-4xl font-bold lg:border-l lg:pl-3 lg:ml-2">
                  <Counter end={11} />
                </span>
              </div>
              <div className="flex flex-col-reverse lg:flex-row items-center">
                <span className="lg:ml-6 uppercase">
                  Years <br className="lg:flex hidden" /> Experience
                </span>
                <span className="text-4xl font-bold lg:border-l lg:pl-3 lg:ml-2">
                  <Counter end={6} />
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 w-full text-center lg:text-right">
            <Button className="" text={"All Projects ->"} />
          </div>
        </div>

   
        <PropertyFilter filteredProperties={filteredProperties} setFilteredProperties={setFilteredProperties} />
      </div>
    </section>
  );
};

export default HeroSec;
