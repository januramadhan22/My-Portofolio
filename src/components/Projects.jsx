import React from "react";
import Footer from "./Footer";

function Projects() {
  return (
    <>
      <section id="projects" className="w-full min-h-screen bg-gray-100">
        <div className="w-full h-full flex flex-col gap-16 justify-start items-center">
          <h1
            data-aos="flip-down"
            data-aos-easing="ease-in"
            data-aos-duration="500"
            className="text-5xl font-extrabold text-black mt-20"
          >
            My Projects
          </h1>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <div className="w-full flex justify-center">
              <div
                data-aos="flip-right"
                data-aos-easing="ease-in"
                data-aos-duration="500"
                className="w-10/12 h-60 shadow-xl bg-[url('../assets/bengcall.png')] bg-cover bg-center rounded-xl"
              >
                <div className="w-full h-full p-4 flex flex-col justify-end items-start bg-gradient-to-r from-gray-800 to-gray-800 opacity-70 rounded-xl">
                  <a
                    href="https://github.com/januramadhan22/BengCall-FrontEnd"
                    className="text-white font-bold text-xl"
                  >
                    Bengcall
                  </a>
                  <p className="text-gray-100">Inspired by Motoku X</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div
                data-aos="flip-right"
                data-aos-easing="ease-in"
                data-aos-delay="300"
                data-aos-duration="500"
                className="w-10/12 h-60 shadow-xl bg-[url('../assets/kelontongpedia.png')] bg-cover bg-center rounded-xl"
              >
                <div className="w-full h-full p-4 flex flex-col justify-end items-start bg-gradient-to-r from-gray-800 to-gray-800 opacity-70 rounded-xl">
                  <a
                    href="https://github.com/januramadhan22/Kelontongpedia"
                    className="text-white font-bold text-xl"
                  >
                    Kelontongpedia
                  </a>
                  <p className="text-gray-100">Inspired by Tokopedia</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div
                data-aos="flip-right"
                data-aos-easing="ease-in"
                data-aos-delay="500"
                data-aos-duration="500"
                className="w-10/12 h-60 shadow-xl bg-[url('../assets/layarkaca22.png')] bg-cover bg-center rounded-xl"
              >
                <div className="w-full h-full p-4 flex flex-col justify-end items-start bg-gradient-to-r from-gray-800 to-gray-800 opacity-70 rounded-xl">
                  <a
                    href="https://github.com/januramadhan22/Layarkaca-22"
                    className="text-white font-bold text-xl"
                  >
                    Layar Kaca 22
                  </a>
                  <p className="text-gray-100">Inspired by Netflix</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div
                data-aos="flip-right"
                data-aos-easing="ease-in"
                data-aos-delay="700"
                data-aos-duration="500"
                className="w-10/12 h-60 shadow-xl bg-[url('../assets/portofolio.png')] bg-cover bg-center rounded-xl"
              >
                <div className="w-full h-full p-4 flex flex-col justify-end items-start bg-gradient-to-r from-gray-800 to-gray-800 opacity-70 rounded-xl">
                  <a
                    href="https://github.com/januramadhan22/My-Portofolio"
                    className="text-white font-bold text-xl"
                  >
                    Januramadhan
                  </a>
                  <p className="text-gray-100">My Web Portofolio</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div
                data-aos="flip-right"
                data-aos-easing="ease-in"
                data-aos-delay="700"
                data-aos-duration="500"
                className="w-10/12 h-60 shadow-xl bg-[url('../assets/ngaps.png')] bg-cover bg-center rounded-xl"
              >
                <div className="w-full h-full p-4 flex flex-col justify-end items-start bg-gradient-to-r from-gray-800 to-gray-800 opacity-70 rounded-xl">
                  <a
                    href="https://github.com/januramadhan22/todo-list-app"
                    className="text-white font-bold text-xl"
                  >
                    Ngaps App
                  </a>
                  <p className="text-gray-100">Todo List App</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div
                data-aos="flip-right"
                data-aos-easing="ease-in"
                data-aos-delay="700"
                data-aos-duration="500"
                className="w-10/12 h-60 shadow-xl bg-[url('../assets/meramal.png')] bg-cover bg-center rounded-xl"
              >
                <div className="w-full h-full p-4 flex flex-col justify-end items-start bg-gradient-to-r from-gray-800 to-gray-800 opacity-70 rounded-xl">
                  <a
                    href="https://github.com/januramadhan22/weather-app-react"
                    className="text-white font-bold text-xl"
                  >
                    Meramal Cuaca
                  </a>
                  <p className="text-gray-100">Wheater App</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div
                data-aos="flip-right"
                data-aos-easing="ease-in"
                data-aos-delay="700"
                data-aos-duration="500"
                className="w-10/12 h-60 shadow-xl bg-[url('../assets/netplix.png')] bg-cover bg-center rounded-xl"
              >
                <div className="w-full h-full p-4 flex flex-col justify-end items-start bg-gradient-to-r from-gray-800 to-gray-800 opacity-70 rounded-xl">
                  <a
                    href="https://github.com/januramadhan22/netplix-app"
                    className="text-white font-bold text-xl"
                  >
                    Netplix
                  </a>
                  <p className="text-gray-100">Netplix</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Projects;
