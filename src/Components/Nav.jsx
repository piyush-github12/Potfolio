import { useGSAP } from "@gsap/react";
import { motion, stagger, useMotionValueEvent, useScroll } from "framer-motion";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Nav = () => {

// console.log(scrollYProgress)
  return (
    <div
      id="nav"
      // ref={nav}
      className="max-md:scale-[0.5] z-[99999] fixed w-full h-[50px] flex  justify-center"
    >
      <div className="fixed overflow-hidden z-[999] mt-[2vh] px-10 rounded-md w-fit   h-fit  flex items-center justify-center gap-10 ">
        <div
          id="bg-nav"
          className="w-full h-full translate-y-[-110%] bg-white absolute rounded-md  "
        ></div>

        {["About", "Skills", "Project", "Contact", "Resume"].map(
          (item, index) => {
            return (
              <motion.div
                animate={{ y: 20, transition: { delay: stagger(index * 2) } }}
                className=" text-[#ffffffbc] hover:text-white ease-in-out duration-200"
              >
                <a
                  href={item == "Resume" ? `/Piyush Gayakwad Resume.pdf` : ` #${item}`}
                  download={item == "Resume" && "piyush's_resume"}
                  className='font-["Mansalva"]  text-[30px] underline flex items-center justify-center gap-2'
                >
                  {item}
                  {item === "Resume" && <FaDownload />}
                </a>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Nav;
