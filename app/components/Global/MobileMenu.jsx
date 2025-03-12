"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "../UI/Button";

const MobileMenu = ({ menuItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FiX className="text-primary text-2xl" />
        ) : (
          <FiMenu className="text-primary text-2xl" />
        )}
      </button>

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg w-64 transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <FiX className="text-primary text-2xl" />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-4">
          {menuItems?.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
        <div className="p-4">
          <Button text="Free Consultation →" />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
