import React from "react";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";

function Footer() {
  return (
    <footer className="w-full h-16 border-t-2 border-gray-500">
      <div className="w-full h-full flex justify-between items-center">
        <p className="ml-20 text-gray-500">© 2020 Janu Ramadhan</p>
        <div className="flex gap-10 mr-20">
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
