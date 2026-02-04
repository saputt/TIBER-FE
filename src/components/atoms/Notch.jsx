import React from "react";

const Notch = ({ variant, children }) => {
  const styles = {
    left: "rounded-br-lg top-0 left-0",
    right: "rounded-bl-lg top-0 right-0",
  };

  const defaultStyle =
    "bg-primary text-white text-h6 font-semibold px-5 px-1 absolute text-center";
  return (
    <div className={` ${styles[variant]} ${defaultStyle}`}>{children}</div>
  );
};

export default Notch;
