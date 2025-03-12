
import { FiMenu, FiX, FiHeart } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import HeaderTopbar from "./HeaderTopbar";
import Button from "../UI/Button";
import MobileMenu from "./MobileMenu"; 

const menuItems = [
  { name: "RENT/BUY", href: "#" },
  { name: "AREA ▼", href: "#" },
  { name: "PROJECT ▼", href: "#" },
  { name: "DEVELOPER ▼", href: "#" },
  { name: "LIST YOUR PROPERTY", href: "#" },
];

export const RenderMenuLinks = () => (
  <nav
    className={`${"hidden md:flex flex-1 justify-center items-center space-x-6"} text-primary font-roboto`}
  >
    {menuItems.map((item, index) => (
      <Link key={index} href={item.href} className="hover:text-secondary">
        {item.name}
      </Link>
    ))}
  </nav>
);

const Header = () => {
  



  return (
    <header className="w-full bg-white shadow-md">
      <HeaderTopbar />

   
      <div className="flex container items-center mx-auto justify-between p-4  md:p-4">

        <div className="flex items-center">
          <Image src="/mainlogo.png" alt="Logo" width={120} height={40} />
        </div>

      
        <RenderMenuLinks />

       
        <div className="flex items-center justify-between">
          <Button text="Free Consultation →" className="mr-1 hidden md:flex" />
          <div className="hidden md:block bg-[#a7a7a73d] p-2">
            <FiHeart className="text-secondary text-xl" />
          </div>

   
          <MobileMenu menuItems={menuItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;
