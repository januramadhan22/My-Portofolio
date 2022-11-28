import React from "react";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";

function Footer() {
  return (
    <footer className="w-full py-4 border-t-2 border-gray-500 bg-gray-100">
      <div className="w-full h-full flex md:flex-row flex-col-reverse gap-2 md:gap-0 justify-center items-center md:justify-between md:items-center">
        <p className=" md:ml-8 lg:ml-20 text-gray-500">© 2020 Janu Ramadhan</p>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5 lg:gap-10 md:mr-8 lg:mr-20">
          <span className="flex items-center gap-2">
            <MdEmail className="fill-gray-500" />
            <p className="text-gray-500">abbyjunior600@gmail.com</p>
          </span>
          <span className="flex items-center gap-2">
            <TiLocation className="fill-gray-500" />
            <p className="text-gray-500">Sidoarjo, East Java, Indonesia</p>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
