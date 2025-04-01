import React, { useEffect } from "react";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
// import Cursor from './Components/Cursor'

const App = () => {
  useEffect(() => {
     let cursor = document.querySelector("#cursor");

    document.addEventListener("mouseenter", function(dets){
      cursor.style.width = "15px";
      cursor.style.height = "15px";
      cursor.style.opacity = 1;

    })
    document.addEventListener("mouseleave", function(dets){
      cursor.style.width = "0px";
      cursor.style.height = "0px";
      cursor.style.opacity = 0
    })
    window.addEventListener("mousemove", function (dets) {
     cursor.style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
     
    });
  }, []);

  return (
    <>
      <div
        id="cursor"
        className="max-md:hidden transition duration-[100ms] bg-white ease-linear opacity-0 border-2 fixed pointer-events-none  z-[9999] w-[0px] h-[0px] rounded-full"
      >
        
      </div>

      <Home />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
