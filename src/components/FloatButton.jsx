import React, { useState } from "react";
import { HiPlus, HiHome, HiUser, HiFolderOpen } from "react-icons/hi";

function FloatButton() {
  const [floatButton, setFloatButton] = useState(false);

  return (
    <>
      <button
        id="float-button"
        onClick={() => setFloatButton(!floatButton)}
        className="hidden fixed bottom-10 right-8 md:right-12 p-2.5 z-50 bg-slate-500 rounded-full shadow-md hover:brightness-90 active:scale-90 text-lg text-white"
      >
        <HiPlus />
      </button>

      {floatButton && (
        <>
          <div
            id="home-float"
            className={`fixed bottom-10 right-[50px] 
              ${floatButton ? "float-home-open" : "float-home-close"}`}
          >
            <a
              href="#home"
              className="flex items-center justify-center p-2 bg-slate-500 rounded-full shadow-md hover:brightness-90 active:scale-95 text-lg text-white "
            >
              <HiHome />
            </a>
          </div>
          <div
            id="about-float"
            className={`fixed bottom-10 right-[50px] 
              ${floatButton ? "float-about-open" : "float-about-close"}`}
          >
            <a
              href="#about"
              className="flex items-center justify-center p-2 bg-slate-500 rounded-full shadow-md hover:brightness-90 active:scale-95 text-lg text-white"
            >
              <HiUser />
            </a>
          </div>
          <div
            id="projects-float"
            className={`fixed bottom-10 right-[50px] 
              ${floatButton ? "float-projects-open" : "float-projects-close"}`}
          >
            <a
              href="#projects"
              className="flex items-center justify-center p-2 bg-slate-500 rounded-full shadow-md hover:brightness-90 active:scale-95 text-lg text-white"
            >
              <HiFolderOpen />
            </a>
          </div>
        </>
      )}
    </>
  );
}

export default FloatButton;
