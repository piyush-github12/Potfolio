import React, { useEffect } from 'react'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Contact from './Components/Contact';
// import Cursor from './Components/Cursor'

const App = () => {

  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#cursor"
    ).style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
  });

  return (
    <>
      <div
        id="cursor"
        className="fixed z-[9999] w-[20px] h-[20px] rounded-full bg-red-300 border-2 border-[#c9c9c9e4]"
      ></div>

      <Home />
      <Projects />
      <Contact/>
    </>
  );
}

export default App