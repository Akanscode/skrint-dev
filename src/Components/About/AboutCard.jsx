import React from "react";
import { FaCode, FaRegObjectUngroup, FaRegDotCircle } from "react-icons/fa";

const AboutCard = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10 md:mt-20">
        <p className="text-white font-bold text-xl capitalize mb-4 ">
          what i do
        </p>
      </div>
      <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
        <div className="group space-y-6 px-8 py-12 text-center text-white bg-gray-900 shadow-2xl shadow-gray-600/10 ">
          <div className="flex flex-row gap-3">
            <FaCode size={40} className="text-blue-800/25" />
            <h3 className="text-2xl font-semibold text-white">
              App. Development
            </h3>
          </div>
          <p className="text-justify">
            Over the years, I've come to realize that writing code is just 20%
            of Application Development, the main work lies in algorithm, data
            structure, logic and general knowledge. With this in mind, I focus
            on developing scalable and easy-to-use solutions that meet client
            and user needs. I develop Test-Driven Enterprise Level solutions
            using .NET Frameworks or Laravel PHP.
          </p>
        </div>
        <div className="group space-y-6 px-8 py-12 text-center text-white bg-gray-900 shadow-2xl shadow-gray-600/10 ">
          <div className="flex flex-row gap-3">
            <FaRegDotCircle size={40} className="text-blue-800/25" />
            <h3 className="text-2xl font-semibold text-white">
              System Analysis
            </h3>
          </div>
          <p className="text-justify">
            In a fast growing techworld, coming up with a usable solution
            requires understanding existing solutions, identifying its loopholes
            and coming up with solutions that solve the identified problems
            efficiently. Things get complex in enterprise solutions as many
            dependencies are to be considerred. My passion lies in exploring
            solutions and coming up with a great implementation plan with all
            dependencies and users in picture all through the process.
          </p>
        </div>
        <div className="group space-y-6 px-8 py-12 text-center text-white bg-gray-900 shadow-2xl shadow-gray-600/10 ">
          <div className="flex flex-row gap-3">
            <FaRegObjectUngroup size={40} className="text-pink-800" />
            <h3 className="text-2xl font-semiboldtext-white">
              Web development
            </h3>
          </div>
          <p className="text-justify">
            E2E (End-to-End) App. Testing focus on testing application flow from
            start to end before it is made available for the general users. This
            is a crucial stage in Software Development lifecycle because it
            shows the difference between the proposed solutions and the reality.
            I focus on coming up with test script that simulate real user
            scenarios and make the solution go through those scenerios with
            different cases, then compare the obtained outcome with the expected
            outcome.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
