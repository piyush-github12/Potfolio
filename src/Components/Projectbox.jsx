import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import { motion } from "framer-motion";


const Projectbox = (props) => {
  
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      id="dabbabox"
      className="max-md:w-[40vw] max-md:h-fit w-[20vw] inline-block align-top pb-2 rounded-xl h-[450px] m-[12px] overflow-hidden  "
    >
      <Link
        target="_blank"
        to={props.item.liveLink ? props.item.liveLink : props.item.linkedinLink}
      >
        <motion.div className="relative w-full h-fit rounded-xl overflow-hidden border-2 border-white  bg-red-200">
          <img className="w-[100%]  " src={props.item.image} alt="" />
        </motion.div>
      </Link>
      <h2
        className="text-[#ffffffe1] text-[2vw] font-extrabold text-center font-mansalva"
        key={props.index}
      >
        {props.item.proName}
      </h2>

      <div className="font-mansalva font-extrabold flex flex-col gap-2 mt-2 items-center  text-12">
        {props.item.liveLink && (
          <motion.div  whileHover={{ scale: 1.2 }} className="mt-2">
            <Link
              className="px-2 border-[1.5px]    bg-[#53ff35] rounded-full"
              target="_blank"
              to={props.item.liveLink}
            >
              Live Website
            </Link>
          </motion.div>
        )}

        {props.item.sourceCode && (
          <motion.div whileHover={{ scale: 1.2 }} className="mt-2">
            <Link
              className="px-2 border-[1.5px]    bg-[#000000] text-white rounded-full"
              target="_blank"
              to={props.item.sourceCode}
            >
              Source Code Github
            </Link>
          </motion.div>
        )}
        {props.item.linkedinLink && (
          <motion.div whileHover={{ scale: 1.2 }} className="mt-2">
            <Link
              className="px-2 border-[1.5px]    bg-[#3f91d5] rounded-full"
              target="_blank"
              to={props.item.linkedinLink}
            >
              Linkedin Post Link
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Projectbox;
