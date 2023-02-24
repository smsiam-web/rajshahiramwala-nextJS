import React from "react";

const Button = ({ btnName = null, style = "" }) => {
  return (
    <>
      <button className={`btn-white ${style}`}>{btnName}</button>
    </>
  );
};

export default Button;
