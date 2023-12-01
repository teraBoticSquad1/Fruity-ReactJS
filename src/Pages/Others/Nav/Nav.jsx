import { CiMenuBurger } from "react-icons/ci";
import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-black font-bold text-xl">Your Logo</div>
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-black focus:outline-none"
          >
            <CiMenuBurger />
          </button>
        </div>
        <div className={`hidden lg:flex space-x-4`}>
          <a href="#" className="text-black">Home</a>
          <a href="#" className="text-black">About</a>
          <a href="#" className="text-black">Services</a>
          <a href="#" className="text-black">Contact</a>
        </div>
      </div>
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
        <a href="#" className="block text-black">Home</a>
        <a href="#" className="block text-black">About</a>
        <a href="#" className="block text-black">Services</a>
        <a href="#" className="block text-black">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
