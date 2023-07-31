"use client";

import React from "react";

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  handleClick,
  btnType,
}) => {
  return (
    <button
      type={btnType || "button"}
      className={`custom-button ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
    </button>
  );
};

export default CustomButton;
