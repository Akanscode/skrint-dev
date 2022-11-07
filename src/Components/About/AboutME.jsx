import React from "react";
import AboutCard from "./AboutCard";

const AboutME = () => {
  return (
    <div className="bg-black w-full min-h-screen ">
      <div className="container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-6 pt-32 pb-20 md:px-8 lg:px-24">
        <div className="flex md:flex-row flex-col justify-between gap-20">
          <div className="md:w-1/2 w-full">
            <img
              src="https://www.skrint.dev/assets/images/ab-img.png"
              className="object-cover w-[60vh] h-[20vh] md:w-[100vh] md:h-[40vh]  "
              alt="aboutImage"
            />
          </div>
          <div className="md:lg-1/2 w-full flex flex-col">
            <h2 className="font-bold text-xl md:text-2xl tracking-widest text-white uppercase">
              About me
            </h2>
            <p className="break-all text-sm  text-white leading-6">
              I'm an Enterprise Level Back-end Developer with experience in many
              <br className="lg:block hidden" />
              frameworks but specialize on Web and Hybrid Mobile Application
              <br className="lg:block hidden" />
              Development. Very conversant with .NET Framework, Laravel PHP (for
              Web)
              <br className="lg:block hidden" /> and IONIC framework (for Hybrid
              Mobile App Development). I work remotely
              <br className="lg:block hidden" /> for clients across the globe.
            </p>
            <div className="mt-4 flex flex-wrap gap-3  ">
              <button className=" h-[30px] lg:w-[15%] w-auto px-2  rounded-xl border border-purple-600  text-gray-50">
                C# (.Net)
              </button>
              <button className=" h-[30px] lg:w-[24%] w-auto  px-2  rounded-xl border border-purple-600  text-gray-50">
                PHP (Laravel)
              </button>
              <button className=" h-[30px] lg:w-[25%] w-auto  px-2  rounded-xl border border-purple-600 text-gray-50">
                Python (Django)
              </button>
              <button className=" h-[30px] lg:w-[15%] w-auto  px-2  rounded-xl border border-purple-600 text-gray-50">
                Javascript
              </button>
              <button className=" lg:w-[15%] h-[30px] w-auto  px-2 rounded-xl border border-purple-600 text-gray-50">
                Typescript
              </button>

              <button className=" lg:w-[15%] h-[30px] w-auto  px-2  rounded-xl border border-purple-600 text-gray-50">
                Angular
              </button>
              <button className=" lg:w-[10%] h-[30px] w-auto  px-2 rounded-xl border border-purple-600 text-gray-50">
                Ionic
              </button>
            </div>
          </div>
        </div>
        <AboutCard />
      </div>
    </div>
  );
};

export default AboutME;
