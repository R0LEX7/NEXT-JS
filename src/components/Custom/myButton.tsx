"use client"

import React from "react";
import "./myButton.css"

const MyButton = ({ title , handleClick = () => {} }) => {
  return (
    <button type="button" className="gradient_anim_btn_demo " onClick={handleClick}>
     {title}
    </button>
  );
};

export default MyButton;
