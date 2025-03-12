"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const developers = [
  { name: "TARAF", src: "/logos/logo-one.jpg", width: 200, height: 200 },
  { name: "IMKAN", src: "/logos/logo-one.jpg", width: 200, height: 200 },
  { name: "DEVELOPER 3", src: "/logos/logo-one.jpg", width: 200, height: 200 },
  { name: "RADIANT REAL ESTATE", src: "/logos/logo-one.jpg", width: 200, height: 200 },
  { name: "SAAS PROPERTIES", src: "/logos/logo-one.jpg", width: 200, height: 200 },
];

const FeaturedDevelopers = () => {
  const [windowWidth, setWindowWidth] = useState(1200); // Default width

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <section className="relative py-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/featured-bg.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="lg:text-5xl text-4xl border-l-[2px] pl-2 border-secondary font-semibold text-dark flex items-center mb-8">
            <span className="w-1 h-[50px] bg-secondary mr-3 hidden"></span>
            FEATURED DEVELOPERS
          </h2>

          <div className="flex flex-wrap justify-between items-center gap-6 mt-12">
            {developers.map((dev, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={dev.src}
                  alt={dev.name}
                  width={windowWidth > 601 ? dev.width : dev.width / 2}
                  height={windowWidth > 601 ? dev.height : dev.height / 2}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDevelopers;
