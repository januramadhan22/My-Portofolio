import React from "react";
import Navbar from "./Navbar";
import { TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { FiInstagram, FiGithub } from "react-icons/fi";

function Home() {
  return (
    <div className="w-full h-screen bg-[url('../assets/bg-home.svg')] bg-cover bg-center">
      <Navbar />
      <div className="w-full h-3/4 flex flex-col items-center justify-center gap-4 ">
        <p
          data-aos="zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration="700"
          className="text-5xl font-semibold text-white tracking-widest"
        >
          Hello
        </p>
        <div className="flex gap-2 items-baseline text-white">
          <p
            data-aos="fade-right"
            data-aos-easing="ease-in"
            data-aos-delay="500"
            data-aos-duration="700"
            className="text-5xl tracking-widest"
          >
            I'm
          </p>
          <h1
            data-aos="fade-left"
            data-aos-easing="ease-in"
            data-aos-delay="500"
            data-aos-duration="700"
            className="text-7xl font-bold tracking-widest"
          >
            Janu
          </h1>
        </div>
        <div className="flex gap-5">
          <a
            data-aos="flip-down"
            data-aos-easing="ease-in"
            data-aos-delay="1000"
            data-aos-duration="800"
            href="https://www.linkedin.com/in/abby-janu-ramadhan-3025b116a/"
            className="opacity-70 hover:opacity-100"
          >
            <TiSocialLinkedin className="fill-white w-7 h-7 p-1 bg-black rounded-badge" />
          </a>
          <a
            data-aos="flip-down"
            data-aos-easing="ease-in"
            data-aos-delay="1100"
            data-aos-duration="800"
            href="https://www.twitter.com/janu_ramadhan22/"
            className="opacity-70 hover:opacity-100"
          >
            <TiSocialTwitter className="fill-white w-7 h-7 p-1 bg-black rounded-badge" />
          </a>
          <a
            data-aos="flip-down"
            data-aos-easing="ease-in"
            data-aos-delay="1200"
            data-aos-duration="800"
            href="https://www.instagram.com/januramadhan_"
            className="opacity-70 hover:opacity-100"
          >
            <FiInstagram className="fill-white stroke-black w-7 h-7 p-1 bg-black rounded-badge" />
          </a>
          <a
            data-aos="flip-down"
            data-aos-easing="ease-in"
            data-aos-delay="1300"
            data-aos-duration="800"
            href="https://github.com/januramadhan22"
            className="opacity-70 hover:opacity-100"
          >
            <FiGithub className="fill-white stroke-none w-7 h-7 p-1 bg-black rounded-badge" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
