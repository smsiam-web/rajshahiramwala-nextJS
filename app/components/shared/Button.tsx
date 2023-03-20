import React from "react";

const Button = ({ title = "", style = "" }) => {
  return (
    <>
      <button className={`btn-white ${style}`}>{title}</button>
    </>
  );
};

export default Button;
