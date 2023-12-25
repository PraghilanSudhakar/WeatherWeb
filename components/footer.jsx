import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-center pin-b flex flex-col items-center py-2">
      <div className="border-t border-grey w-1/3 py-2 "></div>
      <p className="base">
        Made by{" "}
        <span className="transition-colors duration-200 hover:text-primary">
          PragTheDev
        </span>
      </p>
    </footer>
  );
};

export default Footer;
