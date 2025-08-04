import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  function setChange(){
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <>
      <nav className="w-full flex flex-col  bg-[#2C3E50] px-4">
        <div className="container flex py-5 justify-between text-white items-center">

          <div className="logo">
            <h1 className="uppercase text-2xl font-semibold">
              <span className="text-emerald-400">Start</span> Framework
            </h1>
          </div>

          <ul className="nav-links hidden md:flex gap-10">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-emerald-400 py-1 px-2 rounded-lg "
                    : "text-white hover:text-emerald-400"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-emerald-400 py-1 px-2 rounded-lg  "
                    : "text-white  hover:text-emerald-400"
                }
                to={"/Portfolio"}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-emerald-400 py-1 px-2 rounded-lg  "
                    : "text-white  hover:text-emerald-400"
                }
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="darkMood">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 cursor-pointer "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </div>
 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 md:hidden cursor-pointer order-first"
            onClick={() => setChange()}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>

        </div>

        <div className={isOpen ? " flex text-white px-11 pb-4 md:hidden" : "hidden "}>
          <ul className="nav-links flex flex-col gap-4">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-400 py-1 px-2 rounded-lg "
                    : "text-white hover:text-emerald-400"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-400 py-1 px-2 rounded-lg  "
                    : "text-white  hover:text-emerald-400"
                }
                to={"/Portfolio"}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-400 py-1 px-2 rounded-lg  "
                    : "text-white  hover:text-emerald-400"
                }
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
