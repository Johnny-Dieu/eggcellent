import React from "react";
import ImageOne from "../images/egg-1.jpeg";
import ImageTwo from "../images/egg-2.jpeg";
import ImageThree from "../images/egg-3.jpeg";
import ImageFour from "../images/egg-4.jpeg";

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
      <div className="grid grid-cols-2">
        <div className="menu-card">
          <img src={ImageOne} className="h-full rounded mb-20 shadow" />
          <div className="menu-card-text">
            <h2 className="text-2xl mb-2">Egg Benedict</h2>
            <p className="mb-2">Crispy, Delicious & Nutritious</p>
            <span>$12</span>
          </div>
        </div>
        <img
          className="pt-96"
          src="https://doodleipsum.com/700?i=70fc7f630d9fd45c76d2f181e0bc9bf1"
        />
        <img
          className="pt-96"
          src="https://doodleipsum.com/700?i=444ae0dca0b7221e067763d393a56a53"
        />
        <div className="menu-card">
          <img src={ImageTwo} className="h-full rounded mb-20 shadow" />
          <div className="menu-card-text">
            <h2 className="text-2xl mb-2">Avacado Egg Toast</h2>
            <p className="mb-2">Crispy, Delicious & Nutritious</p>
            <span>$18</span>
          </div>
        </div>
        <div className="menu-card">
          <img src={ImageThree} className="h-full rounded mb-20 shadow" />
          <div className="menu-card-text">
            <h2 className="text-2xl mb-2">Eggs & Waffle</h2>
            <p className="mb-2">Crispy, Delicious & Nutritious</p>
            <span>$16</span>
          </div>
        </div>
        <img
          className="pt-96"
          src="https://doodleipsum.com/700?i=7c2cbd1331c698a37772d991d8901eda"
        />
        <img
          className="mt-96"
          src="https://doodleipsum.com/700?i=0e05d2d124e0a86b24727ce6006b739a"
        />
        <div className="menu-card">
          <img src={ImageFour} className="h-full rounded mb-20 shadow" />
          <div className="menu-card-text">
            <h2 className="text-2xl mb-2">English Breakfast</h2>
            <p className="mb-2">Crispy, Delicious & Nutritious</p>
            <span>$20</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default menu;
