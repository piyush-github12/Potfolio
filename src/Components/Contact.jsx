import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
    
  return (
    <div
      id="Contact"
      className="w-full h-fit text-white bg-[#0f0f0f] px-14 max-md:px-5 pb-10 font-love"
    >
      <h1 className="text-[6vw] max-md:text-[30px] text-[#8FEC98] font-love">
        Contact
      </h1>
      <h1 className="font-extrabold text-[3vw] max-md:text-[20px] ">
        E-mail = piyushgayakwad0003@gmail.com
      </h1>
      <h1 className="font-extrabold text-[3vw] max-md:text-[20px] ">
        Address = Bhopal, Madhya Pradesh
      </h1>
      <h1 className="font-extrabold text-[3vw] max-md:text-[20px] ">
        Phone = 9009852775 , 6260410473
      </h1>
      <Link
        target="_blank"
        to={"https://www.linkedin.com/in/piyush-gayakwad-1535551b8/"}
        className="font-extrabold text-[3vw] max-md:text-[20px]  hover:underline text-[#2585CB]"
      >
        Linkedin
      </Link>{" "}
      <br />
      <Link
        target="_blank"
        to={"https://www.instagram.com/piyush_gayakwad_9/"}
        className="font-extrabold text-[3vw] max-md:text-[20px] hover:underline  text-[#ff5656]"
      >
        Instagram
      </Link>{" "}
      <br />
      <Link
        target="_blank"
        to={"https://github.com/piyush-github12"}
        className="font-extrabold text-[3vw] max-md:text-[20px] hover:underline  text-[#ffffff]"
      >
        Github
      </Link>
    </div>
  );
}

export default Contact