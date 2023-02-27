import React from "react";


const About = () => {
  return (
    <div          
      name="aboutMe"
      className="w-full max-h-auto mb-20 mt-20	bg-black	flex-col text-white about"
    >          
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-blue-600 text-4xl font-bold inline border-b-4 border-gray-500">
            AboutMe
          </p>
        </div>
           {/* gig img */}
        <div className="md:flex justify-center gap-20  sm:block ">
        <img width="380px" bg='blue' src='https://camo.githubusercontent.com/97d0c0c4209208d8ec9573c7e213e05872a9f59b703868647b559b77af601cc6/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f65382f66342f35332f65386634353334363961336563393765636433353464663436356437333931332e676966' />

        <div className="p-10 border-2 shadow-2xl shadow-blue-500/100 bg-black">
        <p className="text-2xl font-medium">
        <h1 className="text-blue-600" style={{fontSize:"40px"}}>I am Bhairavnath Gotam</h1><br />
         Dedicated and motivated aspiring Full Stack web developer. a collaborative team player, eager to work with interdisciplinary teams for organizational growth, with a passion for creating new products, and looking forward to starting the journey as a Full Stack web developer.
        </p>      
       {/* <br />
        <p className="text-lg">
         Proficient in  CODING Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start my career as an entry-level software engineer with a reputed firm driven by technology.
        </p> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
