import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { LuExternalLink } from "react-icons/lu";
import { VscGithub } from "react-icons/vsc";

const Projectbox = (props) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      id="dabbabox"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="max-lg:w-[25vw] max-md:w-[45vw] max-sm:w-[80vw] max-[500px]:mb-5 max-sm:mx-auto w-[20vw] flex flex-col justify-between pb-5 rounded-xl h-auto  m-[12px] max-md:m-[2vw] "
    >
      <Link
        target="_blank"
        className="h-[80%]"
        to={props.item.linkedinLink && props.item.linkedinLink}
      >
        <motion.div 
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
          className="relative w-full h-[90%] rounded-xl overflow-hidden border-2 border-white bg-red-200"
        >
          <img className="w-[100%] " src={props.item.image} alt="" />
        </motion.div>
      </Link>
      <h2
        className="text-[#ffffffe1] text-[2vw] max-[500px]:mt-5 max-md:text-[16px] font-extrabold text-center font-mansalva"
        key={props.index}
      >
        {props.item.proName}
      </h2>

      <div className="font-mansalva font-extrabold flex mt-2  justify-between  items-center  px-2 text-12">

       <div className="flex gap-2">
         
       {props.item.sourceCode && (
          <motion.div whileHover={{ scale: 1.2 }} className="tooltip-container" data-tooltip="Source Code">
            <Link target="_blank" to={props.item.sourceCode}>
              {" "}
              <VscGithub className="h-[20px] w-[20px] text-white" />
            </Link>
          </motion.div>
        )}
        {props.item.linkedinLink && (
          <motion.div whileHover={{ scale: 1.2 }} className="tooltip-container" data-tooltip="LinkedIn Post">
            <Link target="_blank" to={props.item.linkedinLink}>
              {" "}
              <CiLinkedin className="h-[20px] w-[20px] text-white" />
            </Link>
          </motion.div>
        )}
       </div>

        {props.item.liveLink && (
          <motion.div whileHover={{ scale: 1.2 }} className="tooltip-container" data-tooltip="Live Site">
            <Link target="_blank" to={props.item.liveLink}>
              {" "}
              <LuExternalLink className="h-[20px] w-[20px] text-white" />
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projectbox;
