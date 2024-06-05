import { motion } from 'framer-motion';
import { stagger } from 'framer-motion/dom';
import React from 'react'
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Nav = () => {
    
    
  return (
    <div id='nav' className='max-md:hidden w-full h-[50px] flex  justify-center'>
      <div className="fixed z-[999] mt-[2vh] px-10 rounded-md w-fit   h-fit  flex items-center justify-center gap-10 ">
        {["About", "Skills", "Project", "Contact", "Resume"].map(
          (item, index) => {
            return (
              <motion.div
                // initial={{ y: "-20" }}
                // whileHover={{ scale: "1.2" }}
                // animate={{ y: 20, transition: { delay: stagger(index * 2) } }}
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
}

export default Nav