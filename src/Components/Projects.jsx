import React, { useEffect, useState } from 'react'
import Projectbox from './Projectbox'
// import {proj} from "./Projectsdata"
import "./Projects.css"
import ProjectModal from './ProjectModal'
import { motion } from 'framer-motion'

const Projects = () => {
   
  const recentFreelance= [
    {
      proName: "Maheshwari Visuals",
      image: 'https://ik.imagekit.io/kcn22v83r/maheshwari.png',
      video:'https://ik.imagekit.io/kcn22v83r/maheswari%20project%20show%20reel.mov/ik-video.mp4?updatedAt=1756364354560',
      linkedinLink:'',
      sourceCode:'',
      discription:''
    },
    {
      proName: "DoveSoft",
      image: 'https://res.cloudinary.com/dzqoiryuc/image/upload/v1756501103/Screenshot_2025-08-30_022421_fdzbvf.png',
      video:'https://res.cloudinary.com/dzqoiryuc/video/upload/v1756500722/TimelineDovesoft_1_yc5fug.mp4',
      linkedinLink:'',
      sourceCode:'',
      discription:''
    },
  ]


  const proj = [
    {
      proName: "ACCRO",
      image: "/images/projectimages/ACCRO.png",
      video:'https://res.cloudinary.com/dzqoiryuc/video/upload/v1756456442/accro_wd9ltt.mp4',
      liveLink: "https://piyush-github12.github.io/ACCRO/",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_an-amazing-new-frontend-project-with-activity-7187903314859036673-1xrr?utm_source=share&utm_medium=member_desktop",
      sourceCode: "https://github.com/piyush-github12/ACCRO/",
      discription: "",
    },
    {
      proName: "OCHI Design",
      image: "/images/projectimages/ochi.png",
      video:'https://res.cloudinary.com/dzqoiryuc/video/upload/v1756495098/ochi_hciuu0.mp4',
      liveLink: "https://ochi-1.onrender.com/#",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_reactjs-html-css-activity-7205691858943975426-fg1h/",
      sourceCode: "https://github.com/piyush-github12/ochi",
      discription: "",
    },

    {
      proName: "EJ Studio",
      image: "/images/projectimages/EJ-Studio.png",
      video:'https://res.cloudinary.com/dzqoiryuc/video/upload/v1756456269/ejStudio_msn4ay.mp4',
      liveLink: "https://piyush-github12.github.io/EJ-Studio/",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_frontenddevelopment-finalproject-sheriyanshcodingschool-activity-7069668982240260096-7fxR?utm_source=share&utm_medium=member_desktop",
      sourceCode: "https://github.com/piyush-github12/EJ-Studio/",
      discription: "",
    },
    {
      proName: "We-think-Elastic",
      image: "/images/projectimages/We-think-elastic.png",
      video:'https://res.cloudinary.com/dzqoiryuc/video/upload/v1756495314/wethink_c42syz.mp4',
      
      liveLink: "https://piyush-github12.github.io/we-think-elastic/",
      linkedinLink:
        "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_hello-connections-this-is-my-new-project-activity-7070000224634617856-Lygn?utm_source=share&utm_medium=member_desktop",
      sourceCode: "https://github.com/piyush-github12/we-think-elastic",
      discription: "",
    },

    {
      proName: "The Bakery",
      image: "/images/projectimages/TheBakery.png",
      video:"https://res.cloudinary.com/dzqoiryuc/video/upload/v1756495193/thebakery_q2rrxr.mp4",
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
    // {
    //   proName: "Dribbbel",
    //   image: "/images/projectimages/Dribbbel.png",

    //   liveLink: "",
    //   linkedinLink:
    //     "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_recently-i-made-this-dribbble-website-clone-activity-7033377375086075904-Lxlj?utm_source=share&utm_medium=member_desktop",
    //   sourceCode: "https://github.com/piyush-github12/Dribbble",
    //   discription: "",
    // },
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
    // {
    //   proName: "instapost",
    //   image: "",
    //   linkedinLink:
    //     "https://www.linkedin.com/posts/piyush-gayakwad-1535551b8_html-css-js-activity-7050889691528654848-SKm8?utm_source=share&utm_medium=member_desktop",
    //   sourceCode: "",
    //   discription: "",
    // },
  ];

   const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  const [viewportAmount, setViewportAmount] = useState(0.3);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 600) {
      setViewportAmount(0);
    } else {
      setViewportAmount(0.3);
    }
  };

  handleResize();
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    
  };
  
  
  return (
    <div
      id="Projects"
      className="w-full min-h-[100vh] bg-[#0f0f0f] px-16 max-md:px-0 max-lg:px-10 pt-14 py-10"
    >
      {/* <h1 className="whitespace-nowrap text-[5vmax] max-md:ml-[20px] text-[#8FEC98] font-love">
        Recent <span className='text-[#2585CB]' >Freelance</span> Work
      </h1>
      <motion.div id="dabba" className=" grid grid-cols-4 max-md:grid-cols-2 gap-y-5   max-lg:grid-cols-3 max-sm:grid-cols-1"  variants={containerVariants} initial="hidden" whileInView="visible"  viewport={{ once: true, amount: 0.3 }} >
        {recentFreelance.map((item, index) => {
          return <motion.div key={index} variants={itemVariants}   > <Projectbox item={item} index={index}  onClick={() => openModal(item)} />  </motion.div> ;
        })}

      </motion.div> */}
      <h1 className="whitespace-nowrap text-[5vmax] max-md:ml-[20px] text-[#8FEC98] font-love">
        Projects
      </h1>
      <motion.div id="dabba" className=" grid grid-cols-4 max-md:grid-cols-2 gap-y-5   max-lg:grid-cols-3 max-sm:grid-cols-1" variants={containerVariants} initial="hidden" whileInView="visible"  viewport={{ once: true, amount: viewportAmount }}>
        {proj.map((item, index) => {
          return <motion.div key={index} variants={itemVariants}  ><Projectbox item={item} index={index}  onClick={() => openModal(item)}  /> </motion.div>  ;
        })}

        {/* <Projectbox /> */}
      </motion.div>

      <h2 className="whitespace-nowrap text-[5vmax] mb-10 max-md:mb-2 max-md:ml-[20px] text-[#8FEC98] font-love">
        Landing Pages
      </h2>
      <motion.div id="dabba" className="grid grid-cols-4 max-md:grid-cols-2 gap-y-5  max-lg:grid-cols-3 max-sm:grid-cols-1"  variants={containerVariants} initial="hidden" whileInView="visible"  viewport={{ once: true, amount: 0.3 }} >
        {landinPages.map((item, index) => {
          return <motion.div key={index} variants={itemVariants} > <Projectbox item={item} index={index}  onClick={() => openModal(item)} />  </motion.div> ;
        })}
      </motion.div>

       {modalProject && (
        <ProjectModal project={modalProject} onClose={closeModal} />
      )}
    </div>
  );
}

export default Projects