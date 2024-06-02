import React from 'react'
import Nav from './Nav'
import Skills from './Skills';

const Home = () => {
  return (
    <div className=" w-[100vw] min-h-[100vh] bg-[#0f0f0f] text-white py-2">
      <Nav />
      <div className="text-[6vw] leading-none  mt-[30vh]  ml-14">
        <h1 className="font-love">Portfolio <span className='text-[4vw]'>of</span></h1>
        <h1 className='font-londrina text-[#808080] text-[8vw]'>Piyush Gayawad</h1>
      </div>
      <div className="font-love text-[2vw] w-[50%] mt-32 ml-20">
        <h1>Hey there ,</h1>
        <h1>I am Piyush Gayakwad</h1>
        <h1>a Web Developer & Designer</h1>
      </div>

      <Skills/>
      
    </div>
  );
}

export default Home