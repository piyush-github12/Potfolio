import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Skills = () => {


  useGSAP(() => {
    gsap.from("#jk", {      
      scale:1.2,
      opacity:0,
      // rotate:720,
      stagger:0.05,
      x:-20,
      scrollTrigger:{
        trigger:".skbox",
        start:"top 70%",
        end:"top top",
        // markers:true,
        
        // scrub:true

      }
    });
  });


  return (
    <div id="Skills" className="w-full h-fit  mt-5 p-[5vw] ">
      <div className="flex gap-4 items-center justify-start ">
        <div className="w-[30px] h-[5px] rounded-full bg-white "></div>
        <h1 className="font-[mansalva] text-[3vmax]"> What I am Good at</h1>
      </div>
      <div className="leading-[6vw] flex mt-10 max-md:mt-5 mb-10  items-end gap-4 font-love">
        <h1 className="whitespace-nowrap text-[6vmax] text-[#2585CB]">
          Skills
        </h1>
        <h1 className="whitespace-nowrap text-[3vmax] ">And</h1>
        <h1
          animate={{ x: 400 }}
          id="dp"
          className="whitespace-nowrap text-[6vmax]  text-[#8FEC98]"
        >
          Interest
        </h1>
      </div>
      <div className="skbox w-full h-fit px-10 py-10 max-md:px-[0px] max-md:grid max-md:grid-cols-4  bg-[#86868678] text-[1.5vw] max-md:text-[9px] rounded-xl">
        <div
          id="jk"
          className="w-[8vw] max-md:w-[15vw]   inline-block  max-md:m-2 max-md:mb-5  mr-10  h-[8vw] max-md:h-[15vw]  "
        >
          <img
            className="  h-full "
            src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
            alt=""
          ></img>
          <h1 className="font-extrabold text-center">HTML</h1>
        </div>
        <div
          id="jk"
          className="w-[8vw] max-md:w-[15vw]   inline-block  max-md:m-2 max-md:mb-5  mr-10  h-[8vw] max-md:h-[15vw]  "
        >
          <img className="  h-full " src="/images/css-3 (1).png" alt=""></img>
          <h1 className="font-extrabold text-center">CSS</h1>
        </div>
        <div
          id="jk"
          className="w-[8vw] max-md:w-[15vw]   inline-block  max-md:m-2 max-md:mb-5  mr-10  h-[8vw] max-md:h-[15vw]  "
        >
          <img className="  w-[80%] " src="/images/js.png" alt=""></img>
          <h1 className="font-extrabold whitespace-nowrap text-center">
            JAVA SCRIPT
          </h1>
        </div>
        <div
          id="jk"
          className="w-[8vw] max-md:w-[15vw]   inline-block  max-md:m-2 max-md:mb-5  mr-10  h-[8vw] max-md:h-[15vw]  "
        >
          <img className="  h-full " src="/images/reactjs.jpg" alt=""></img>
          <h1 className="font-extrabold text-center">REACT js</h1>
        </div>
        <div
          id="jk"
          className="w-[8vw] max-md:w-[15vw]   inline-block  max-md:m-2 max-md:mb-5  mr-10  h-[8vw] max-md:h-[15vw]  "
        >
          <img className=" w-full " src="/images/tailwind.png" alt=""></img>
          <h1 className="font-extrabold text-center">Tailwind CSS</h1>
        </div>
        <div
          id="jk"
          className="w-[8vw] max-md:w-[15vw]   inline-block  max-md:m-2 max-md:mb-5  mr-10  h-[8vw] max-md:h-[15vw]  "
        >
          <img className="  w-full " src="/images/Mern.png" alt=""></img>
          <h1 className="font-extrabold text-center">MERN</h1>
        </div>
        <div
          id="jk"
          className="w-[8vw] max-md:w-[15vw]   inline-block  max-md:m-2 max-md:mb-5  mr-10  h-[8vw] max-md:h-[15vw]  "
        >
          <img className="  w-full " src="/images/gsap.jpg" alt=""></img>
          <h1 className="font-extrabold text-center">GSAP</h1>
        </div>
        <div
          id="jk"
          className="w-[8vw] max-md:w-[15vw]   inline-block  max-md:m-2 max-md:mb-5  mr-10  h-[8vw] max-md:h-[15vw]  "
        >
          <img className="  w-full " src="/images/nodejspng.png" alt=""></img>
          <h1 className="font-extrabold text-center">NODE js</h1>
        </div>
        <div
          id="jk"
          className="w-[8vw] max-md:w-[15vw]   inline-block  max-md:m-2 max-md:mb-5  mr-10  h-[8vw] max-md:h-[15vw]  "
        >
          <img className="  w-full " src="/images/mongodb.svg" alt=""></img>
          <h1 className="font-extrabold text-center">MONGODB</h1>
        </div>
        <div
          id="jk"
          className="w-[8vw] max-md:w-[15vw]   inline-block  max-md:m-2 max-md:mb-5  mr-10  h-[8vw] max-md:h-[15vw]  "
        >
          <img className="  w-full " src="/images/framer.png" alt=""></img>
          <h1 className="font-extrabold text-center">FRAMER MOTION</h1>
        </div>
      </div>
    </div>
  );
}

export default Skills