import React, { useState } from "react";
import { motion } from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import { LuExternalLink } from "react-icons/lu";
import { VscGithub } from "react-icons/vsc";

const Projectbox = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div
      id="dabbabox"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="max-lg:w-[25vw] max-md:w-[45vw] max-sm:w-[80vw] max-[500px]:mb-5 max-sm:mx-auto w-[20vw] flex flex-col justify-between  pb-5 rounded-xl h-auto m-[12px] max-md:m-[2vw]"
    >
      <div className="h-[80%] cursor-pointer" onClick={handleClick}>
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
          className="relative w-full  sm:h-[160px] rounded-xl overflow-hidden border-2 border-white bg-red-200"
        >
          <img className="w-full h-full object-cover " src={props.item.image} alt={props.item.proName} />
        </motion.div>
      </div>

      <h2
        className="text-[#ffffffe1] text-[2vw] max-[500px]:mt-5 max-md:text-[16px] font-extrabold text-center font-Caveat"
        key={props.index}
      >
        {props.item.proName}
      </h2>

      <div className="font-Caveat  font-extrabold flex mt-2 justify-between items-center px-2 text-12">
        <div className="flex gap-2">
          {props.item.sourceCode && (
            <motion.div whileHover={{ scale: 1.2 }} className="tooltip-container" data-tooltip="Source Code">
              <a href={props.item.sourceCode} target="_blank" rel="noopener noreferrer">
                <VscGithub className="h-[20px] w-[20px] text-white" />
              </a>
            </motion.div>
          )}
          {props.item.linkedinLink && (
            <motion.div whileHover={{ scale: 1.2 }} className="tooltip-container" data-tooltip="LinkedIn Post">
              <a href={props.item.linkedinLink} target="_blank" rel="noopener noreferrer">
                <CiLinkedin className="h-[20px] w-[20px] text-white" />
              </a>
            </motion.div>
          )}
        </div>
        {props.item.liveLink && (
          <motion.div whileHover={{ scale: 1.2 }} className="tooltip-container" data-tooltip="Live Site">
            <a href={props.item.liveLink} target="_blank" rel="noopener noreferrer">
              <LuExternalLink className="h-[20px] w-[20px] text-white" />
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projectbox;