"use client";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative text-white py-12">
 
      <div className="absolute inset-0">
        <Image
          src="/footer-bg.webp" 
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-primary/60"></div>{" "}
 
      </div>

  
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
  
        <div className="bg-[#8080809e] p-6 rounded-lg  md:flex md:flex-col  md:justify-between">
          <p className="text-lg text-left font-semibold">
            Our expert will help you buy the best property
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-4">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 rounded-md bg-white text-black w-full md:w-[28%]"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="px-4 py-2 rounded-md bg-white text-black w-full md:w-[28%]"
            />
            <div className="flex items-center bg-white px-4 py-2 rounded-md w-full md:w-[28%]">
              <Image
                src="/english.png"
                alt="Flag"
                width={20}
                height={14}
                className="mr-2"
              />
              <input
                type="text"
                placeholder="+44"
                className="bg-transparent text-black flex-1 outline-none"
              />
            </div>
            <button className="bg-secondary text-white px-6 py-2 rounded-full">
              Send request
            </button>
          </div>
        </div>

 
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
      
          <div>
            <h3 className="text-lg font-semibold">CONTACT US</h3>
            <p className="flex items-center mt-2">
              <FiMapPin className="mr-2 text-white" /> <span className="bg-[#8080805c] p-2 px-4 rounded-sm mr-2">Abu Dhabi</span> Dubai
            </p>
            <p className="flex items-center mt-2">
              <FiPhone className="mr-2 text-white" /> (050) 205-0089
            </p>
            <p className="flex items-center mt-2">
              <FiMail className="mr-2 text-white" /> info@oiaproperties.com
            </p>

          
            <p className="text-white font-semibold my-2">FOLLOW US</p>
            <div className="flex space-x-4 mt-4">
       
              <FaFacebookF size={30} className="text-xl border rounded-sm p-2 cursor-pointer hover:text-secondary" />
              <FaTwitter size={30} className="text-xl border rounded-sm p-2 cursor-pointer hover:text-secondary" />
              <FaLinkedinIn size={30} className="text-xl border rounded-sm p-2 cursor-pointer hover:text-secondary" />
              <FaInstagram size={30} className="text-xl border rounded-sm p-2 cursor-pointer hover:text-secondary" />
            </div>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold">AREAS</h3>
            {[
              "Yas Island",
              "Al Reem Island",
              "Saadiyat Island",
              "Al Raha Beach",
              "Al Ghadeer",
              "Al Maryah Island",
            ].map((area, index) => (
              <p key={index} className="mt-2">
                {area} <span className="text-secondary">(Listing)</span>
              </p>
            ))}
          </div>

       
          <div>
            <h3 className="text-lg font-semibold">DEVELOPERS</h3>
            {[
              "Aldar Properties",
              "Bloom Holding",
              "Imkan - Jubail",
              "Nine Yards",
              "NIC",
              "Modon - Q Properties",
              "Eagle Hills - Ramhan",
            ].map((dev, index) => (
              <p key={index} className="mt-2">
                {dev}
              </p>
            ))}
          </div>

       
          <div>
            <h3 className="text-lg font-semibold">MENU</h3>
            {[
              "Home",
              "Area",
              "Project",
              "Developer",
              "Rent/Buy",
              "List Your Properties",
              "Blog",
              "Contact Us",
            ].map((menu, index) => (
              <p
                key={index}
                className="mt-2 text-secondary hover:text-white cursor-pointer"
              >
                {menu}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
