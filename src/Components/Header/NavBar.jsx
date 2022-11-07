import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Hero from "./Hero";
import "./style.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#fff");
  const listenScrollEvent = () => {
    window.scrollY > 6 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 6 ? setnavSize("5rem") : setnavSize("10rem");
    window.screenY > 5 ? setTextColor("#fff") : setTextColor("#fff");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <nav
        style={{
          backgroundColor: navColor,
          color: textColor,
          height: navSize,
          transition: "all 1s",
        }}
        className="fixed w-[100%] flex  md:justify-center items-center h-[10rem] top-0 left-0 z-20 transition-all ease-in   "
      >
        <div className="container m-auto px-6 md:px-12 lg:px-6">
          {/**============desktop header=========== */}
          <ul className="md:flex flex-wrap items-center justify-center space-x-8 py-6 md:py-4 md:gap-0 hidden ">
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="about"
                className=" active:border-b-2 hover:border-slate-400 active:border-b-violet-200 text-xl font-bold transition cursor-pointer  hover:text-purple-900  capitalize "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active "
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="about"
                className=" active:border-b-2 hover:border-slate-400 active:border-b-violet-200 text-xl font-bold transition cursor-pointer  hover:text-purple-900  capitalize "
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth
                spy
                to="skills"
                className=" hover:border-b-2 hover:border-slate-400 text-xl font-bold transition  cursor-pointer hover:text-purple-900 "
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth
                spy
                to="experience"
                className=" hover:border-b-2 hover:border-slate-400 text-xl font-bold transition  cursor-pointer hover:text-purple-900  "
              >
                Experiences
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth
                spy
                to="blog"
                className=" hover:border-b-2 hover:border-slate-400 text-xl font-bold transition  cursor-pointer hover:text-purple-900 "
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        {/**========moblie view  */}
        <div className="block md:hidden p-4" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div>
          <ul
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-slate-800 bg-[#6b094a] ease-in-out duration-500"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <li className="p-4 hover:border-b-2 mt-5 hover:border-slate-400 text-xl font-bold transition  cursor-pointer hover:text-purple-900">
              About
            </li>
            <li className="p-4 hover:border-b-2 hover:border-slate-400 text-xl font-bold transition  cursor-pointer hover:text-purple-900">
              Projects
            </li>
            <li className="p-4 hover:border-b-2 hover:border-slate-400 text-xl font-bold transition  cursor-pointer hover:text-purple-900">
              Skills
            </li>
            <li className="p-4 hover:border-b-2 hover:border-slate-400 text-xl font-bold transition  cursor-pointer hover:text-purple-900">
              Experiences
            </li>
            <li className="p-4 hover:border-b-2 hover:border-slate-400 text-xl font-bold transition  cursor-pointer hover:text-purple-900">
              Blog
            </li>
          </ul>
        </div>
      </nav>
      <Hero />
    </div>
  );
};

export default NavBar;
