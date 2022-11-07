import React from "react";
import { HiOutlineEnvelope, HiOutlinePhoneXMark } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaInvision } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="absolute inset-0 w-full h-screen object-cover object-top"
          src="https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867759__340.jpg"
          width="400"
          height="500"
          alt="heroImage"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full min-h-screen bg-gray-800 bg-opacity-70 backdrop-blur-xs"
        ></div>
        <div className="relative container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-6 md:px-8 lg:px-24 ">
          <div className=" pt-40  md:pt-56 ">
            <div className="flex justify-between  lg:space-x-20 lg:flex-row flex-col-reverse">
              {/**====== hero text=========== */}
              <div className="flex flex-col space-y-1 lg:w-1/2 pt-10">
                <button className="bg-purple-500 px-2 py-2 w-[100px] font-bold text-white shadow-lg outline-none rounded rounded-tr-3xl rounded-bl-3xl">
                  Hello I'M
                </button>
                <h1 className="uppercase font-bold text-2xl md:text-5xl text-white">
                  GMATT MATTHEW
                </h1>
                <h1 className="uppercase font-bold text-2xl  md:text-5xl text-white">
                  Afolabi
                </h1>
                <h4 className=" capitalize font-bold text-xl md:text-4xl text-white  ">
                  Software Engineer
                </h4>
                <p className="flex flex-row items-center space-x-4 text-white font-medium  text-sm">
                  <HiOutlineEnvelope size={20} />
                  <span>skrinkdev@gmail.com, gmattworld@gmail.com</span>
                </p>
                <p className="flex flex-row items-center space-x-4 text-white font-medium text-sm">
                  <HiOutlinePhoneXMark size={20} />
                  <span>(+234) 8160541072, (+234) 903 364 5526 </span>
                </p>
                <p className="flex flex-row items-center space-x-4 text-white font-medium text-sm">
                  <HiOutlineLocationMarker size={20} />
                  <span>Lagos, Nigeria.</span>
                </p>
                <div className=" pt-1 md:pt-4 ml-4 flex flex-row space-x-6 ">
                  <span className="hover:text-purple-500 hover:shadow-lg hover:bg-slate-200  px-2 py-2 hover:rounded-md text-white">
                    <FaTwitter size={15} />
                  </span>
                  <span className="hover:text-purple-500 hover:shadow-lg hover:bg-slate-200  px-2 py-2 hover:rounded-md text-white">
                    <FaFacebook size={15} />
                  </span>
                  <span className="hover:text-purple-500 hover:shadow-lg hover:bg-slate-200  px-2 py-2 hover:rounded-md text-white">
                    <FaInvision size={15} />
                  </span>
                </div>
              </div>

              <div className="lg:w-1/2  md:mb-0 ml-6">
                <img
                  className="  object-cover rounded-full w-[60%]   ring-[20px] ring-black ring-offset-[20px] ring-offset-slate-400/20"
                  src="https://www.skrint.dev/assets/images/hero.jpg"
                  alt="Your Name Here"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
