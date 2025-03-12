import React from "react";

const Button = ({ text, onClick, className, type = "primary" }) => {
  if (type === "secondary") {
    return (
      <button
        onClick={onClick}
        className={`bg-white text-primary border border-primary px-4 py-2 rounded-full cursor-pointer ${className}`}
      >
        {text}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`bg-secondary text-white px-4 py-2 rounded-full cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
