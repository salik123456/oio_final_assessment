import React from "react";
import { FaCaretDown } from "react-icons/fa";
import Image from "next/image";

const aavailableLanguages = [{ name: "English", flagSrc: "/english.png" }];

function HeaderTopbar() {
  return (
    <div className="flex justify-end bg-primary p-2 text-white text-sm items-center space-x-2">
      {aavailableLanguages.map((language, index) => (
        <div key={index} className="flex items-center space-x-1">
          {/* Language Flag */}
          <Image
            src={language.flagSrc}
            alt={`${language.name} Flag`}
            width={20}
            height={14}
            className="rounded-sm"
          />

          {/* Language Text */}
          <span>{language.name}</span>
        </div>
      ))}

      {/* Dropdown Icon */}
      <FaCaretDown className="text-secondary text-xs" />
    </div>
  );
}

export default HeaderTopbar;
