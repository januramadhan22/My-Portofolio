import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="md:navbar-start justify-between">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
          </ul>
        </div>
        <a
          href="#"
          className="ml-5 md:ml-20 text-2xl font-bold text-white tracking-widest"
        >
          J A N U R
        </a>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="flex gap-14 mr-20 font-semibold text-white">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
