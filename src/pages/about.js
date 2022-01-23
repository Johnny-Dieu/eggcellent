import React from "react";
import Iframe from "react-iframe";
import profile from "../images/icon.png";

const about = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-yellow-300">
        <h1 className="text-9xl uppercase font-black">About Us</h1>
        <svg
          className="w-50 h-40 mt-80"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>
      <div class="h-screen flex flex-col justify-center items-center">
        <div class="border-r border-b border-l border-gray-400 lg:border-r-0 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-tight">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">
              "You can't make an omelette without breaking a few eggs" - Unknown
            </div>
            <p class="text-gray-700 text-base">
              Here at EGGCELLENT we have nothing to hide. We crack our eggs,
              cook em like you want them and serve it to you on a luke warm
              plate. <br />
              Access the resturant using your private helicopter located ontop
              of the CN Tower in the 6ix.
              <br />
              On Thursdays catch Drake sitting!!
              <br />
              <br />
              <br />
              This website is completely fake and has no association to any eggs
              or chickens.
            </p>
          </div>
          <div class="flex items-center">
            <img class="w-20 h-20 rounded-full mr-4" src={profile} />
            <div class="text-sm">
              <p class="text-gray-900 leading-none">Johnny Dieu</p>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2887.2556301265!2d-79.3856352292221!3d43.6428495861458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1642893376307!5m2!1sen!2sca"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></Iframe>
          </div>
          <br />
          <br />
          <p>*No chickens were harmed in the making of this website</p>
        </div>
      </div>
    </>
  );
};

export default about;
