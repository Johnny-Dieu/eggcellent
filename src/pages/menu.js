import React from "react";
import Content from "../components/Content";

const menu = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-green-600">
        <h1 className="text-9xl uppercase font-black">Menu Page</h1>
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
            d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
          />
        </svg>
      </div>
      <Content />
    </>
  );
};

export default menu;
