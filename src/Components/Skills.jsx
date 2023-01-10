import React from "react";


const Skills = () => {
  const techs = [
    {
      id: 1,
      src: 'https://cdn-icons-png.flaticon.com/512/174/174854.png',
      title: "HTML",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      title: "React",
      style: "shadow-blue-600",
    },
   
    {
      id: 9,
      src: 'https://media.graphassets.com/VKHHNvEETYqZRkqgjybc',
      title: "Next.js",
      style: "shadow-sky-400",
    },
    
    {
      id: 12,
      src: 'https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55',
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 13,
      src: 'https://www.coffeeclass.io/logos/chakra-ui.png',
      title: "Chakra UI",
      style: "shadow-sky-400",
    },
    {
      id: 14,
      src: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-3629020-3030245.png',
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 15,
      src: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
      title: "NodeJS",
      style: "shadow-green-600",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-stone-900	 w-full max-h-fit"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-blue-600	 text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          {/* <p className="py-6 text-lg	font-medium	text-neutral-400">These are the technologies I've worked with and used them in my projects.</p> */}
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center mt-11 py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
