"use client";
import React, { useState } from "react";

const ToggleButton = ({ option1, option2, onButtonSelect }) => {
  const [active, setActive] = useState(option1);

  const handleToggle = (option) => {
    setActive(option);
    if (typeof onButtonSelect === "function") {
      onButtonSelect(option);
    }
  };

  return (
    <div className="relative inline-flex items-center cursor-pointer">
      <div className="flex  border-3 rounded-full overflow-hidden bg-white">
        <button
          className={`px-10 py-2 transition-all duration-300 rounded-full cursor-pointer space-x-1 ${
            active === option1
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }`}
          onClick={() => handleToggle(option1)}
        >
          {option1}
        </button>
        <button
          className={` py-2 px-10 transition-all duration-300 rounded-full cursor-pointer space-x-1  ${
            active === option2
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }`}
          onClick={() => handleToggle(option2)}
        >
          {option2}
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
