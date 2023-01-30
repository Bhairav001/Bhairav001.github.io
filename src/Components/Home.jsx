import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Link } from "react-scroll";
import { DiCodeigniter } from "react-icons/di";
// import Bhairavnath_Gotam_Resume from "./Bhairavnath_Gotam_Resume.pdf"
import Bhairavnath_Gotam_Resume from "../img_bhairav/Bhairavnath_Gotam_Resume.pdf"
const Home = () => (
  <div
    name="home"
    className="h-screen  w-full bg-stone-900 home"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center max-h-full px-4 md:flex-row">
      <div className="small-screen hidden mt-8">
        <img
          src='https://avatars.githubusercontent.com/u/105972503?v=4'
          alt="profile"
          className="border-blue-600 w-72  rounded-full" />
      </div>
      <div className="flex flex-col justify-center h-auto mt-36">
       <div className="">
       <h2 className="text-2xl sm:text-6xl font-bold text-white">
         Hello, I'm <span className="text-blue-600" >Bhairavnath Gotam</span>
        </h2>
        <div className="mt-4 text-4xl text-white font-bold ">Full Stack Web Developer</div>
        <p className="font-medium	text-2xl text-gray-400 py-4 max-w-md">
        I love to build websites using the latest front-end technologies and ready to contribute to any project.</p>
      

      
        <a
          href={Bhairavnath_Gotam_Resume}
          className="flex justify-between items-center w-full text-white"
          download={true}
          onClick={() => window.open("https://drive.google.com/file/d/1IKsSHWlro4QzDLWPzQvw3qBpkylBZcuU/view?usp=sharing", "_blank")}
          rel="noreferrer"
        >
        <div className="group text-white w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-b from-blue-600 to-blue-700 cursor-pointer"> <span className="font-medium text-xl" >Resume</span> <BsFillPersonLinesFill className="text-2xl" /></div>
        </a>
        </div>
      </div>
     
        <div className="big-screen w-8/12  mt-12 shadow-blue-600 ">
          <img 
            src='https://avatars.githubusercontent.com/u/105972503?v=4'
            alt="profile"
            className="p-10 w-100 h-90 rounded-full"
          />
        </div>
    </div>
  </div>
);

export default Home;
