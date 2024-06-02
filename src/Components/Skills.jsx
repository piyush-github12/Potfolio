import React from 'react'

const Skills = () => {
  return (
    <div className="w-full h-fit  mt-20 px-[5vw]">
      <div className="flex gap-4 items-center justify-start ">
        <div className="w-[30px] h-[5px] rounded-full bg-white "></div>
        <h1 className="font-[mansalva] text-[30px]"> What I am Good at</h1>
      </div>
      <div className="leading-[6vw] flex mt-10 mb-10  items-end gap-4 font-love">
        <h1 className="whitespace-nowrap text-[6vw] text-[#2585CB]">Skills</h1>
        <h1 className="whitespace-nowrap text-[2vw] ">And</h1>
        <h1 className="whitespace-nowrap text-[6vw]  text-[#8FEC98]">
          Interest
        </h1>
      </div>
      <div className='w-full h-[40vh] bg-[#86868678] rounded-xl'></div>
    </div>
  );
}

export default Skills