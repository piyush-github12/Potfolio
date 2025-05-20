import React from 'react'
import Nav from './Nav'
import Skills from './Skills';
import { TypeAnimation } from 'react-type-animation';
import Contact from './Contact';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  
  
const { scrollYProgress } = useScroll();
useMotionValueEvent(scrollYProgress,"change", (latest) => {
  console.log(latest);
});

  
  return (
    <motion.div
      id="About"
      className=" w-[100vw] min-h-[100vh] bg-[#0f0f0f] text-white py-2"
    >
{/*       <Nav /> */}
      <div className="text-[100px] max-md:text-[60px] leading-none  mt-[15vh]  ml-14 max-md:ml-5 max-md:mt-20">
        <h1 id='pot' className="font-love">
          Portfolio <span className="max-md:text-[40px]  text-[60px]">of</span>
        </h1>
        <h1 style={{}} className="font-londrina   text-[#808080] max-md:text-[90px] text-[120px]">
          Piyush Gayakwad
        </h1>
      </div>
      <div className="font-love h-[10vw]  text-[2vw]  w-[50%] max-md:w-full mt-10 ml-20 max-md:ml-10 max-md:mb-10">
        <h1 >
          <TypeAnimation
            sequence={[
              `Hey there,\nI'm Piyush Gayakwad \n A Full Stack Web Developer and Designer`,
              2000,
            ]}
            speed={30}
            // repeat={Infinity}
            style={{ whiteSpace: "pre-line", fontSize: "2vmax" }}
          />
        </h1>
      </div>

      <Skills />
    </motion.div>
  );
}

export default Home
