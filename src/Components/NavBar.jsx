import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import {BiDownload} from "react-icons/bi"
import { DiCodeigniter } from "react-icons/di";
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "statistics",
    },
    {
      id: 6,
      link: "contact",
    },
  
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black font-bold fixed nav bg-blue-600 to-blue-600">
      <div>
       
        <h1 className="text-5xl shadow-lg shadow-black font-style: italic ml-2"><a className="cursor-pointer link-underline link-underline-black" target="_blank" rel="noreferrer">{`<B/G>`}</a></h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-bold text-xl text-black-500 hover:scale-105 hover:text-black duration-200 link-underline"
          >
            <Link to={link} offset={-100}  smooth duration={500}>
              {link}
            </Link>
          
          </li>
          
        ))}
        <li 
          className="nav-links px-4 cursor-pointer capitalize font-bold text-xl text-black-500 hover:scale-105 hover:text-black duration-200 link-underline"
          ><a 
          // href={Bhairavnath_Gotam_Resume}
          // download={true}
          //  target="_blank"
          // rel="noreferrer"
          onClick={() => window.open("https://drive.google.com/file/d/1IKsSHWlro4QzDLWPzQvw3qBpkylBZcuU/view?usp=sharing", "_blank")}
          >
            Resume</a></li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
              offset={-100}
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
                
              </Link>
           
            </li>
          ))}

        </ul>
        
      )}
      
    </div>
  );
};

export default NavBar;
