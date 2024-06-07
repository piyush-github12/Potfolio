import React from 'react'
import Nav from './Nav'
import Skills from './Skills';
import { TypeAnimation } from 'react-type-animation';
import Contact from './Contact';

const Home = () => {
  return (
    <div
      id="About"
      className=" w-[100vw] min-h-[100vh] bg-[#0f0f0f] text-white py-2"
    >
      <Nav />
      <div className="text-[70px]  leading-none  mt-[15vh]  ml-14 max-md:ml-5 max-md:mt-20">
        <h1 className="font-love">
          Portfolio <span className="text-[40px]">of</span>
        </h1>
        <h1 className="font-londrina text-[#808080] text-[90px]">
          Piyush Gayawad
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
    </div>
  );
}

export default Home