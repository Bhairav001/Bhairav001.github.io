import React from "react";


import bestBuy from '../img_bhairav/bestbuy.png'
import sephora from '../img_bhairav/sephora.png'
import orbitz from '../img_bhairav/orbitz.png'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: 'https://camo.githubusercontent.com/6150a6e884804d67a0af7baa4726485476a939773a8a84b5522e1a762dd49960/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a747a4949646b565f36734348556d55686141564674772e77656270',
      title: "shop.com",
      tech:"HTML | CSS | JavaScript | React | Chakra UI",
      desc:"SHOP.COM is the ultimate online shopping destination. We are the leader of online cash back shopping. ",
      link: "https://shop-five-sand.vercel.app/",
      repo: "https://github.com/Bhairav001/SHOP.COM",
    },
    {
      id: 2,
      src: bestBuy,
      title: "bestbuy.com",
      tech:"HTML | CSS | JavaScript ",
      desc:"BESTBUY.COM is a A website to purchase electronics and cell phones products. BESTBUY.COM Clone Shop Best Buy for electronics, computers, appliances, cell phones, video games & more new tech.",
      link: "https://merry-stardust-45b623.netlify.app/",
      repo: "https://github.com/Bhairav001/BESTBUY.COM",
    },
    {
      id: 3,
      src: sephora,
      title: "sephora.com",
      tech:"HTML | CSS | JavaScript",
      desc:"I have built this an e-commerce website. On this website, firstly user have to login after then it will redirect to the home page where user can see the product collection and product page as well as can add the items to the cart.",
      link: "https://frabjous-squirrel-071560.netlify.app/",
      repo: "https://github.com/Bhairav001/SEPHORA.COM",
    },
    {
      id: 4,
      src:orbitz,
      title: "Orbitz.com",
      tech:"HTML | CSS | JavaScript",
      desc:"Orbitz.com is a travel fare aggregator website and travel metasearch engine. Orbitz Worldwide, a website to booking hotels.",
      link: "https://delicate-peony-2695b2.netlify.app/",
      repo: "https://github.com/Bhairav001/ORBITZ.COM",
    }
   
  ];
  
  return (
    <div
      name="projects"
      className="md:bg-stone-900	mb-20 w-full text-white max:h-full"
    > 
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-20">
          <p className="text-blue-600	 text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 text-lg	font-medium	text-neutral-400">I have Built some Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10 px-12 sm:px-0">
          {projects.map(({ id, src, link, repo,title ,tech,desc}) => (
            <div key={id} className="shadow-md shadow-blue-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md h-72 w-full duration-200 hover:scale-105"
              />
              <div className="text-center	pt-4 text-blue-500 font-bold	font-mono text-2xl	" >{title}</div>
             <div className="text-center pt-4 text-slate-300	font-medium	text-xl	"> <p>{desc}</p></div>
              <p className="text-center pt-4 text-slate-300	font-medium	text-xl">Tech Stack: {tech}</p>
              <div className="flex items-center justify-center">
                <button
                  className="w-1/4 px-6 py-3 m-4  px-6 py-3 my-8 mx-auto flex justify-center items-center rounded-md bg-gradient-to-b from-blue-600 to-blue-700 hover:bg-white duration-300 bg-blue-700 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-1/4 px-6 py-3 m-4 bg-gradient-to-b from-blue-600 to-blue-700 px-6 py-3 my-8 mx-auto flex justify-center items-center rounded-md hover:scale-110 duration-300 bg-blue-700 hover:scale-105"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
