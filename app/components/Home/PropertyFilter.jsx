"use client";

import React, { useState, useEffect } from "react";
import ToggleButton from "../UI/ToggleButton";
import Button from "../UI/Button";
import { TbReload } from "react-icons/tb";
import {
  PROPERTY_TYPES,
  BEDROOMS,
  PROPERTY_SIZES,
  PRICE_RANGES,
} from "../../constants/filterOptions";

const PropertyFilter = () => {
  const [propertyType, setPropertyType] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const params = new URLSearchParams();
    if (propertyType) params.append("propertyType", propertyType);
    if (bedroom) params.append("bedroom", bedroom);
    if (propertySize) params.append("propertySize", propertySize);
    if (priceRange) params.append("priceRange", priceRange);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [propertyType, bedroom, propertySize, priceRange]);

  const resetFilters = () => {
    setPropertyType("");
    setBedroom("");
    setPropertySize("");
    setPriceRange("");
    window.history.replaceState({}, "", window.location.pathname);
  };

  return (
    <div className="flex flex-col justify-start mt-2 lg:mt-0  gap-2 md:gap-4 w-full">
      <div className="bg-[#80808091] w-full lg:w-[80%] p-4 rounded-lg">
        <div className="flex lg:flex-row flex-col gap-2 mb-4">
          <ToggleButton option1="FOR SALE" option2="FOR RENT" />
          <button
            className="bg-transparent cursor-pointer text-white mx-4 py-2 font-semibold flex items-center gap-2 border-b-2 border-white"
            onClick={resetFilters}
          >
            <TbReload /> RESET
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <input
            type="text"
            placeholder="City, community, area"
            className="bg-white text-gray-800 px-4 py-2 rounded-md w-full md:w-auto"
          />
          <select
            className="bg-white text-gray-800 px-4 py-2 rounded-md w-full md:w-auto"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Property Type</option>
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <select
            className="bg-white text-gray-800 px-4 py-2 rounded-md w-full md:w-auto"
            value={bedroom}
            onChange={(e) => setBedroom(e.target.value)}
          >
            <option value="">Bedroom</option>
            {BEDROOMS.map((bedroom) => (
              <option key={bedroom} value={bedroom}>
                {bedroom}
              </option>
            ))}
          </select>
          <select
            className="bg-white text-gray-800 px-4 py-2 rounded-md w-full md:w-auto"
            value={propertySize}
            onChange={(e) => setPropertySize(e.target.value)}
          >
            <option value="">Property Size</option>
            {PROPERTY_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <select
            className="bg-white text-gray-800 px-4 py-2 rounded-md w-full md:w-auto"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">Price</option>
            {PRICE_RANGES.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>
          <Button text={"Search"} className={"px-12"} />
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;
