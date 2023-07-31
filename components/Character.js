"use client";

import React from "react";
import CustomButton from "./CustomButton";

const Character = () => {
  return (
    <div className="character">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="character__title">Character landing page</h1>
        <p className="character__subtitle">
          Learning project, still has some issues like filter is not working and
          SSR so it will reload when search a character. Below is the project i
          learn to make.
        </p>

        <a href="https://youtu.be/pUNSHPyVryU">
          <CustomButton
            title="Project Idea"
            containerStyles="bg-primary-blue text-white rounded-full mt-10 px-3 py-3"
          ></CustomButton>
        </a>
      </div>
      <div className="character__image-container"></div>
    </div>
  );
};

export default Character;
