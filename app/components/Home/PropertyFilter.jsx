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
  PROPERTIES,
} from "../../constants/filterOptions";
import Image from "next/image";

const PropertyFilter = ({ filteredProperties, setFilteredProperties }) => {
  const [propertyType, setPropertyType] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams();
      if (propertyType) params.append("propertyType", propertyType);
      if (bedroom) params.append("bedroom", bedroom);
      if (propertySize) params.append("propertySize", propertySize);
      if (priceRange) params.append("priceRange", priceRange);

      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, "", newUrl);
    }
  }, [propertyType, bedroom, propertySize, priceRange]);

  const handleSearch = () => {
    const checkSizeMatch = (propertySize, selectedSize) => {
      if (!selectedSize) return true;
    
      const parseSize = (size) => {
        if (size.includes("Less than")) return [0, parseInt(size.match(/\d+/)[0])];
        if (size.includes("+")) return [parseInt(size.match(/\d+/)[0]), Infinity];
        return size.split(" - ").map(Number);
      };
    
      const [propMin, propMax] = parseSize(propertySize);
      const [selMin, selMax] = parseSize(selectedSize);
    
      return selMin >= propMin && selMax <= propMax;
    };
    
    const checkPriceMatch = (propertyPrice, selectedPrice) => {
      if (!selectedPrice) return true;
    
      const parsePrice = (price) => {
        if (price.includes("Under")) return [0, parseInt(price.match(/\d+/)[0])];
        if (price.includes("Over")) return [parseInt(price.match(/\d+/)[0]), Infinity];
        return price.replace(/[$,]/g, "").split(" - ").map(Number);
      };
    
      const [propMin, propMax] = parsePrice(propertyPrice);
      const [selMin, selMax] = parsePrice(selectedPrice);
    
      return selMin >= propMin && selMax <= propMax;
    };
    
    
  
    let results = PROPERTIES.filter((property) => {
      const matchesType = !propertyType || property.type === propertyType;
      const matchesBedroom = !bedroom || property.bedrooms === bedroom;
      const matchesSize = !propertySize || checkSizeMatch(property.size, propertySize);
      const matchesPrice = !priceRange || checkPriceMatch(property.price, priceRange);
      console.log("Property:", property.type, property.size, property.price);
      console.log("Selected:", propertyType, propertySize, priceRange);
      console.log("Matches:", matchesType, matchesSize, matchesPrice);
      return matchesType || matchesBedroom || matchesSize || matchesPrice;
    });
  
    console.log("Filtered Properties:", results); 
    setFilteredProperties(results);
  };
  

  const resetFilters = () => {
    setPropertyType("");
    setBedroom("");
    setPropertySize("");
    setPriceRange("");
    setFilteredProperties([]); 
    window.history.replaceState({}, "", window.location.pathname);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-start mt-2 lg:mt-0 gap-2 md:gap-4 w-full">
        <div className="bg-[#80808091] w-full  p-4 rounded-lg">
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
              className="bg-white text-gray-800 px-4 py-2 rounded-md w-full "
            />
            <select className="bg-white text-gray-800 px-4 py-2 rounded-md w-full md:w-auto " value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
              <option value="">Property Type</option>
              {PROPERTY_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <select className="bg-white text-gray-800 px-4 py-2 rounded-md w-full md:w-auto " value={bedroom} onChange={(e) => setBedroom(e.target.value)}>
              <option value="">Bedroom</option>
              {BEDROOMS.map((bedroom) => (
                <option key={bedroom} value={bedroom}>{bedroom}</option>
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
            <Button text="Search" className="px-12" onClick={handleSearch} />
          </div>
        </div>
      </div>

  
      {filteredProperties?.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-4">
          {filteredProperties.map((property, index) => (
            <div key={index} className="lg:p-4 p-2 rounded-lg text-center lg:w-[19%] w-[29%]">
              <Image src={property.image} alt={property.type} width={200} height={200} className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] rounded-md" />
              <h3 className="lg:text-lg text-sm  font-semibold mt-2">{property.type}</h3>
              <p className="lg:text-md text-xs">{property.bedrooms} | {property.size}</p>
              <p className="font-bold lg:text-md text-xs">{property.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyFilter;
