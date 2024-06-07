import { motion, stagger } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

const Nav = () => {

  return (
    <div
      id="nav"
      className="max-md:scale-[0.5] fixed w-full h-[50px] flex  justify-center"
    >
      <div className="fixed overflow-hidden z-[999] mt-[2vh] px-10 rounded-md w-fit   h-fit  flex items-center justify-center gap-10 ">
        {/* <motion.div
          
          className="w-full h-full translate-x-[-50%] bg-white absolute rounded-md  "
        ></motion.div> */}

        {["About", "Skills", "Project", "Contact", "Resume"].map(
          (item, index) => {
            return (
              <motion.div
                animate={{ y: 20, transition: { delay: stagger(index * 2) } }}
                className=" text-[#ffffffbc] hover:text-white ease-in-out duration-200"
              >
                <a
                  href={item == "Resume" ? `/piyush's_resume.pdf` : ` #${item}`}
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
