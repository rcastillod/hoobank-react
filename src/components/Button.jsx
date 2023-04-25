import React from "react";

const Button = ({ styles, link }) => {
  return (
    <a
      href={link}
      className={`py-4 px-6 bg-blue-gradient rounded-lg font-medium text-[18px] text-primary ${styles}`}
    >
      Get Started
    </a>
  );
};

export default Button;
