import React from "react";
import Profile from "../assets/profil.jpg";

function About() {
  return (
    <div
      id="about"
      className="w-full h-screen bg-white flex justify-center items-center gap-6"
    >
      <img
        data-aos="fade-right"
        data-aos-easing="ease-in"
        data-aos-duration="500"
        src={Profile}
        alt="Abby Janu Ramadhan"
        className="w-1/4 rounded-md shadow-md"
      />
      <div className="w-2/5 h-auto flex flex-col gap-4 text-justify text-black">
        <div
          data-aos="fade-in"
          data-aos-easing="ease-in"
          data-aos-duration="500"
          id="desc"
        >
          <h2 className="font-extrabold text-2xl">About Me</h2>
          <p className="font-medium">
            Hello, i’m Abby Janu Ramadhan as a ameteur Illustrator and junior
            Frontend Engineer. I’m familiar with React JS, Javascript, HTML, CSS
            and Figma. I graduated from Alterra Academy in Frontend Developer at
            November 2022. I like to design and draw, but also interested in the
            world of coding, and both of these things I could find when I became
            a Frontend Engineer.
            <br /> Let's become a friend and drink a coffee together.
          </p>
        </div>
        <div id="progress-bar" className="flex flex-col gap-2">
          <div
            data-aos="fade-in"
            data-aos-easing="ease-in"
            data-aos-delay="500"
            data-aos-duration="500"
            className="w-full h-6 bg-slate-100 rounded-md shadow-inner z-0"
          >
            <div
              data-aos="fade-in"
              data-aos-easing="ease-in"
              data-aos-delay="700"
              data-aos-duration="700"
              className="z-10 w-11/12 h-6 px-1 bg-black rounded-md flex items-center justify-between text-sm text-white"
            >
              <p>HTML</p>
              <p>90%</p>
            </div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-easing="ease-in"
            data-aos-delay="900"
            data-aos-duration="500"
            className="w-full h-6 bg-slate-100 rounded-md shadow-inner z-0"
          >
            <div
              data-aos="fade-in"
              data-aos-easing="ease-in"
              data-aos-delay="1000"
              data-aos-duration="700"
              className="z-10 w-11/12 h-6 px-1 bg-black rounded-md flex items-center justify-between text-sm text-white"
            >
              <p>CSS</p>
              <p>90%</p>
            </div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-easing="ease-in"
            data-aos-delay="1100"
            data-aos-duration="500"
            className="w-full h-6 bg-slate-100 rounded-md shadow-inner z-0"
          >
            <div
              data-aos="fade-in"
              data-aos-easing="ease-in"
              data-aos-delay="1200"
              data-aos-duration="700"
              className="z-10 w-8/12 h-6 px-1 bg-black rounded-md flex items-center justify-between text-sm text-white"
            >
              <p>Javascript</p>
              <p>65%</p>
            </div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-easing="ease-in"
            data-aos-delay="1300"
            data-aos-duration="500"
            className="w-full h-6 bg-slate-100 rounded-md shadow-inner z-0"
          >
            <div
              data-aos="fade-in"
              data-aos-easing="ease-in"
              data-aos-delay="1400"
              data-aos-duration="700"
              className="z-10 w-8/12 h-6 px-1 bg-black rounded-md flex items-center justify-between text-sm text-white"
            >
              <p>React</p>
              <p>65%</p>
            </div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-easing="ease-in"
            data-aos-delay="1500"
            data-aos-duration="500"
            className="w-full h-6 bg-slate-100 rounded-md shadow-inner z-0"
          >
            <div
              data-aos="fade-in"
              data-aos-easing="ease-in"
              data-aos-delay="1600"
              data-aos-duration="700"
              className="z-10 w-6/12 h-6 px-1 bg-black rounded-md flex items-center justify-between text-sm text-white"
            >
              <p>Figma</p>
              <p>50%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
