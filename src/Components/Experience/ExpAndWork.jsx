import React from "react";
import { educational } from "./Data";
import { experience } from "./Data";

const ExpAndWork = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="absolute inset-0 w-full h-full object-cover object-top"
          src="https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867759__340.jpg"
          alt="heroImage"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full bg-gray-800 bg-opacity-70 backdrop-blur-xs"
        ></div>
        <div className="carousel relative container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-6 py-20 md:px-8 lg:px-24">
          <div className="flex flex-col md:flex-row gap-20  justify-between">
            {/**============educatrional data========= */}
            <div className="flex flex-col space-y-6 md:w-1/2 w-full">
              <h2 className="text-white font-bold text-xl  uppercase">
                education
              </h2>
              {educational.map((edudata, index) => (
                <div
                  className="space-y-6 px-8 py-12 text-center text-white bg-gray-900 shadow-2xl shadow-gray-600/10"
                  key={index}
                >
                  <div className="flex flex-row space-x-2 items-center">
                    <h2 className="text-white font-medium text-sm">
                      {edudata.Coures}
                    </h2>
                    <h2 className="font-medium text-sm cursor-pointer text-purple-800">
                      {edudata.schoolName}
                    </h2>
                  </div>
                  <p className="text-purple-800 text-left ">{edudata.year}</p>
                  <p className="text-white text-justify">{edudata.Summary}</p>
                </div>
              ))}
            </div>
            {/**=========experience ============= */}
            <div className="flex flex-col  space-y-6 md:w-1/2 w-full">
              <h2 className="text-white font-bold text-xl uppercase">
                experience
              </h2>
              {experience.map((experdata, index) => (
                <div
                  key={index}
                  className="space-y-6 px-8 py-12 text-center text-white bg-gray-900 shadow-2xl shadow-gray-600/10"
                >
                  <div className="flex flex-row space-x-1 items-center">
                    <h2 className="text-white font-medium text-sm">
                      {experdata.workrole}
                    </h2>
                    <h2 className="text-purple-800 font-medium text-sm">
                      {experdata.companyname}
                    </h2>
                  </div>
                  <p className="text-purple-800 text-left text-sm">
                    {experdata.duration}
                  </p>
                  {experdata.activities.map((task, index) => (
                    <div key={index}>
                      <h3 className="text-white font text-left text-sm ">
                        {task.text} :{" "}
                      </h3>
                      <ul className="list-outside list-disc text-left text-white text-sm">
                        <li>{task.list1}</li>
                        <li>{task.list2}</li>
                        <li>{task.list3}</li>
                        <li>{task.list4}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpAndWork;
