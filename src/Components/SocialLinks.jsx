import React from "react";

import { AiFillMediumCircle} from "react-icons/ai";
import {
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';
import { Link } from "react-scroll";
const SocialLinks = () => {
 
  return (
       <div className="block bg-stone-900">


        <div className="md:flex justify-center gap-12   sm:block mb-2 ">
          <div  className="flex gap-2 sm:mt-2 ">
          <div className="rounded-full w-10 flex justify-center items-center border-hidden font-extrabold		text-2xl text-black bg-blue-700 		 h-10	">C</div>
         <div className="text-blue-700 font-bold text-lg">+91-9923951056</div>
          </div>

          <div  className="flex gap-2 sm:mt-2">
          <div className="rounded-full w-10 flex justify-center items-center border-hidden font-extrabold		text-2xl text-black bg-blue-700 	font-bold	 h-10	"> @</div>
          <div className="text-blue-700 font-bold text-lg">bhairavgotam08@gmail.com</div>
          </div>

        </div>


       <div className="flex justify-center gap-10  bg-stone-900">
         
         <div className="border-2 rounded-full w-10 flex justify-center items-center border-hidden font-extrabold		text-2xl text-black bg-blue-700 		 h-10	">  <a href="" onClick={() => window.open("https://www.linkedin.com/in/bhairav-gotam-a209021b9/", "_blank")}><FaLinkedinIn/></a> </div>
         <div className="border-2 rounded-full w-10 flex justify-center items-center border-hidden font-extrabold		text-2xl text-black bg-blue-700 		 h-10	"> <a  href="" onClick={() => window.open("https://github.com/Bhairav001", "_blank")}> <FaGithub/></a>  </div>
         <div className="border-2 rounded-full w-10 flex justify-center items-center border-hidden font-extrabold		text-2xl text-black bg-blue-700 		 h-10	"> <a  href="" onClick={() => window.open("https://medium.com/@bhairavgotam081", "_blank")}> <AiFillMediumCircle/></a>  </div>
    </div>
    
    </div>
  );
};

export default SocialLinks;
// onClick={() => window.open("https://drive.google.com/file/d/1IKsSHWlro4QzDLWPzQvw3qBpkylBZcuU/view?usp=sharing", "_blank")}
