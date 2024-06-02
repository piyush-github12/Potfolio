import React from 'react'
import Projectbox from './Projectbox'

const Projects = () => {
  return (
    <div className="w-full min-h-[100vh] bg-[#0f0f0f] px-20 py-20">
      <h1 className="whitespace-nowrap text-[6vw]  text-[#8FEC98] font-love">
        Projects
      </h1>
      <div className="grid grid-cols-3">
        <Projectbox />
        <Projectbox />
        
      </div>
    </div>
  );
}

export default Projects