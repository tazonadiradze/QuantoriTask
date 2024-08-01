import React, { useState } from "react";
import { Tab } from "./tab.component";
import USER from "../assets/images/user.png";
import { FaEllipsisV } from "react-icons/fa";
import { useLoginContext } from "../context/login.context";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setShowLogin, showLogin } = useLoginContext();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img className="w-12" src={USER} alt="User" />

        <nav className="pl-20 hidden sm:block w-full">
          <div className="border-2 border-[#80AF81] rounded-full flex justify-around px-4 py-1">
            <Tab page="home">Home</Tab>
            <Tab page="about">About</Tab>
            <Tab page="contact">Contact</Tab>
          </div>
        </nav>
      </div>

      <div
        className="text-sm hover:text-gray-900 cursor-pointer hidden sm:block bg-green-600 text-white"
        onClick={() => setShowLogin(!showLogin)}
      >
        Login
      </div>

      <div
        className="sm:hidden text-green-500 cursor-pointer border-2 border-green-500 rounded-full p-1"
        onClick={handleMenuToggle}
      >
        <FaEllipsisV className="transform rotate-180" />
      </div>
      {menuOpen && (
        <div className="absolute top-16 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 sm:hidden">
          <Tab page="home">Home</Tab>
          <Tab page="about">About</Tab>
          <Tab page="contact">Contact</Tab>
        </div>
      )}
    </header>
  );
};

export default Header;
