import React, { useEffect } from "react";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
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
        className="max-md:hidden fixed pointer-events-none  z-[9999] w-[25px] h-[25px] rounded-full"
      >
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.19 34.22"
          stroke="white"
          fill="white"
          className="w-full h-full rotate-[10deg] "
        >
          
          <path
            class="cls-1"
            d="M28.76,15.65s-9.15-.78-12.65,2.14c-2.95,2.46-3.5,14.01-3.5,14.01L.94,1.06l27.83,14.59Z"
          />
        </svg>
      </div>

      <Home />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
