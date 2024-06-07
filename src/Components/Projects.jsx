import React from 'react'
import Projectbox from './Projectbox'
// import {proj} from "./Projectsdata"
import "./Projects.css"

const Projects = () => {
   
  const proj = [
    {
      proName: "ACCRO",
      image: "/images/projectimages/ACCRO.png",
      liveLink: "https://piyush-github12.github.io/ACCRO/",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_an-amazing-new-frontend-project-with-activity-7187903314859036673-1xrr?utm_source=share&utm_medium=member_desktop",
      sourceCode: "https://github.com/piyush-github12/ACCRO",
      discription: "",
    },
    {
      proName: "OCHI Design",
      image: "/images/projectimages/ochi.png",
      liveLink: "https://ochi-1.onrender.com/#",
      linkedinLink: "",
      sourceCode: "https://github.com/piyush-github12/ochi",
      discription: "",
    },

    {
      proName: "EJ Studio",
      image: "/images/projectimages/EJ-Studio.png",
      liveLink: "",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_frontenddevelopment-finalproject-sheriyanshcodingschool-activity-7069668982240260096-7fxR?utm_source=share&utm_medium=member_desktop",
      sourceCode: "",
      discription: "",
    },
    {
      proName: "We-think-Elastic",
      image: "/images/projectimages/We-think-elastic.png",
      liveLink: "https://piyush-github12.github.io/we-think-elastic/",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_hello-connections-this-is-my-new-project-activity-7070000224634617856-Lygn?utm_source=share&utm_medium=member_desktop",
      sourceCode: "https://github.com/piyush-github12/we-think-elastic",
      discription: "",
    },

    {
      proName: "The Bakery",
      image: "/images/projectimages/TheBakery.png",
      liveLink: "",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_seniorvsjunior-sheryianscodingschool-sheryians-activity-7072608716440670208-hV9d?utm_source=share&utm_medium=member_desktop",
      sourceCode: "https://github.com/piyush-github12/The-Bakery",
      discription: "",
    },
    {
      proName: "Yolele",
      image: "/images/projectimages/yolele.png",
      liveLink: "https://piyush-github12.github.io/yolele-/",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_webdevelopment-webdesign-html5-activity-7074105935224320002-gPA-?utm_source=share&utm_medium=member_desktop",
      sourceCode: "https://github.com/piyush-github12/yolele-",
      discription: "",
    },
    {
      proName: "Premier",
      image: "/images/projectimages/Premier.png",
      liveLink: "",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_project-html-css-activity-7039486676343160832-X0BP?utm_source=share&utm_medium=member_desktop",
      sourceCode: "https://github.com/piyush-github12/Premiar",
      discription: "",
    },
    {
      proName: "Compact Startup",
      image: "/images/projectimages/Compact.png",
      liveLink: "",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_gsap-locomotive-scrolltrigger-activity-7057616933239586816-cwBw?utm_source=share&utm_medium=member_desktop",
      sourceCode: "https://github.com/piyush-github12/compact-startup",
      discription: "",
    },
    {
      proName: "Alexis Gardin",
      image: "/images/projectimages/alexis.png",

      liveLink: "",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_html-css-work-activity-7046330072001114112-v_Gx?utm_source=share&utm_medium=member_desktop",
      sourceCode: "",
      discription: "",
    },
    {
      proName: "Dribbbel",
      image: "/images/projectimages/Dribbbel.png",

      liveLink: "",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_recently-i-made-this-dribbble-website-clone-activity-7033377375086075904-Lxlj?utm_source=share&utm_medium=member_desktop",
      sourceCode: "https://github.com/piyush-github12/Dribbble",
      discription: "",
    },
  ];

  const landinPages = [
    {
      proName: "DoveBet",
      image: "/images/projectimages/Dovebet.png",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_html-css-js-activity-7057444881723518976-kg_v?utm_source=share&utm_medium=member_desktop",
      sourceCode: "https://github.com/piyush-github12/Dovebet-landingpage",
      discription: "",
    },
    {
      proName: "Bottel",
      image: "/images/projectimages/Bottel.png",

      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_html-css-webdesign-activity-7056359911479246849-WQsg?utm_source=share&utm_medium=member_desktop",
      sourceCode: "",
      discription: "",
    },
    {
      proName: "Rogger",

      image: "/images/projectimages/Rogger.png",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_html-css-webdevelopment-activity-7044414987502579713-Riri?utm_source=share&utm_medium=member_desktop",
      sourceCode: "https://github.com/piyush-github12/roggre-landingpage",
      discription: "",
    },
    {
      proName: "Eat Whatever",
      image: "/images/projectimages/eat-whatever.png",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_html-css-webdevelopment-activity-7048764574879141888-gCpe?utm_source=share&utm_medium=member_desktop",
      sourceCode: "",
      discription: "",
    },
    {
      proName: "ICELAND",
      image: "/images/projectimages/iceland.png",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_html-css-activity-7044021858584727552-hwVs?utm_source=share&utm_medium=member_desktop",
      sourceCode: "https://github.com/piyush-github12/iceland-landingpag",
      discription: "",
    },
    {
      proName: "Watches",
      image: "/images/projectimages/watch.png",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_html-css-webdevelopment-activity-7046559548534394880-dQ9T?utm_source=share&utm_medium=member_desktop",
      sourceCode: "https://github.com/piyush-github12/Watch-landingpage",
      discription: "",
    },
    {
      proName: "Cranbary",
      image: "/images/projectimages/Cranbary.png",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_html-css-activity-7046208407439081472-Np33?utm_source=share&utm_medium=member_desktop",
      sourceCode: "",
      discription: "",
    },
    {
      proName: "instapost",
      image: "",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_html-css-js-activity-7050889691528654848-SKm8?utm_source=share&utm_medium=member_desktop",
      sourceCode: "",
      discription: "",
    },
  ];

  return (
    <div id="Project" className="w-full min-h-[100vh] bg-[#0f0f0f] px-20 pt-20">
      <h1 className="whitespace-nowrap text-[6vmax] max-md:ml-[20px] text-[#8FEC98] font-love">
        Projects
      </h1>
      <div id="dabba" className=" ">
        {proj.map((item, index) => {
          return <Projectbox item={item} index={index} />;
        })}

        {/* <Projectbox /> */}
      </div>

      <h2 className="whitespace-nowrap text-[4vmax] mb-10 max-md:mb-2 max-md:ml-[20px] text-[#8FEC98] font-love">
        Landing Pages
      </h2>
      <div id="dabba" className="grid grid-cols-4">
        {landinPages.map((item, index) => {
          return <Projectbox item={item} index={index} />;
        })}
      </div>
    </div>
  );
}

export default Projects