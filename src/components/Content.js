import React from "react";
import ImageOne from "../images/egg-1.jpeg";
import ImageTwo from "../images/egg-2.jpeg";
import ImageThree from "../images/egg-3.jpeg";
import ImageFour from "../images/egg-4.jpeg";

const Content = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div className="menu-card">
          <img src={ImageOne} className="h-full rounded mb-20 shadow" />
          <div className="menu-card-text">
            <h2 className="text-2xl mb-2">Egg Benedict</h2>
            <p className="mb-2">Crispy, Delicious & Nutritious</p>
            <span>$12</span>
          </div>
        </div>
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

export default Content;
