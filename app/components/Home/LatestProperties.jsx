"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PropertyCard from "../Global/PropertyCard";
import Button from "../UI/Button";

const LatestProperties = () => {
  const [activeTab, setActiveTab] = useState("forSale");

  const properties = {
    forSale: [
      {
        id: 1,
        images: ["/project-one.jpg", "/project-two.jpg", "/project-three.jpg"],
        type: "For Sale",
        price: "$1,249,000",
        buildingName: "SkyHomes Holiday Homes villas",
        location: "Abu Dhabi, Yas Island",
        bedrooms: "3 Bed",
        bathrooms: "3 Bath",
        size: "1,142 FT",
        agentName: "Jane Smith",
        profile: "/profile/imageone.jpg",
      },
      {
        id: 2,
        images: ["/project-two.jpg", "/project-three.jpg", "/project-one.jpg"],
        type: "For Sale",
        price: "$1,249,000",
        buildingName: "Noya Viva",
        location: "Abu Dhabi, Yas Island",
        bedrooms: "3 Bed",
        bathrooms: "3 Bath",
        size: "1,142 FT",
        agentName: "Jane Smith",
        profile: "/profile/imagetwo.jpg",
      },
      {
        id: 3,
        images: ["/project-two.jpg", "/project-three.jpg", "/project-one.jpg"],
        type: "For Sale",
        price: "$1,249,000",
        buildingName: "Noya Viva",
        location: "Abu Dhabi, Yas Island",
        bedrooms: "3 Bed",
        bathrooms: "3 Bath",
        size: "1,142 FT",
        agentName: "Jane Smith",
        profile: "/profile/imagethree.jpg",
      },
      {
        id: 4,
        images: ["/project-two.jpg", "/project-three.jpg", "/project-one.jpg"],
        type: "For Sale",
        price: "$1,249,000",
        buildingName: "Noya Viva",
        location: "Abu Dhabi, Yas Island",
        bedrooms: "3 Bed",
        bathrooms: "3 Bath",
        size: "1,142 FT",
        agentName: "Jane Smith",
        profile: "/profile/imagefour.jpg",
      },
   
    ],
    forRent: [
      {
        id: 5,
        images: [
          "/featured-bg.webp",
          "/project-gardenia.webp",
          "/project-one.jpg",
        ],
        type: "For Rent",
        price: "$1,500/month",
        buildingName: "Rental Apartment",
        location: "Dubai Marina",
        bedrooms: "2 Bed",
        bathrooms: "2 Bath",
        size: "900 FT",
        agentName: "John Doe",
        profile: "/profile/imageone.jpg",
      },
      {
        id: 6,
        images: [
          "/featured-bg.webp",
          "/project-gardenia.webp",
          "/project-one.jpg",
        ],
        type: "For Rent",
        price: "$1,500/month",
        buildingName: "Rental Apartment",
        location: "Dubai Marina",
        bedrooms: "2 Bed",
        bathrooms: "2 Bath",
        size: "900 FT",
        agentName: "John Doe",
        profile: "/profile/imagetwo.jpg",
      },
      {
        id: 7,
        images: [
          "/featured-bg.webp",
          "/project-gardenia.webp",
          "/project-one.jpg",
        ],
        type: "For Rent",
        price: "$1,500/month",
        buildingName: "Rental Apartment",
        location: "Dubai Marina",
        bedrooms: "2 Bed",
        bathrooms: "2 Bath",
        size: "900 FT",
        agentName: "John Doe",
        profile: "/profile/imagethree.jpg",
      },
      {
        id: 8,
        images: [
          "/featured-bg.webp",
          "/project-gardenia.webp",
          "/project-one.jpg",
        ],
        type: "For Rent",
        price: "$1,500/month",
        buildingName: "Rental Apartment",
        location: "Dubai Marina",
        bedrooms: "2 Bed",
        bathrooms: "2 Bath",
        size: "900 FT",
        agentName: "John Doe",
        profile: "/profile/imagefour.jpg",
      },
    ],
  };

  const currentProperties = properties[activeTab];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-5xl text-4xl pl-2 border-l-[2px] border-secondary font-semibold text-dark flex items-center mb-8">
          <span className="w-1 h-[50px] hidden bg-secondary mr-3"></span>
          LATEST PROPERTIES
        </h2>
        <div className="flex mb-10">
          <button
            className={`px-8 py-4 rounded-l-md cursor-pointer font-semibold ${
              activeTab === "forSale"
                ? "bg-secondary text-black"
                : "text-blue-800"
            }`}
            onClick={() => setActiveTab("forSale")}
          >
            FOR SALE
          </button>
          <button
            className={`px-8 py-4 rounded-r-md cursor-pointer border border-gray-200 font-semibold ${
              activeTab === "forRent"
                ? "bg-secondary text-black"
                : "text-blue-800"
            }`}
            onClick={() => setActiveTab("forRent")}
          >
            FOR RENT
          </button>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {currentProperties.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard {...property} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-8">
          <Button type="secondary" text={"All Properties →"} />
        </div>
      </div>
    </section>
  );
};

export default LatestProperties;
