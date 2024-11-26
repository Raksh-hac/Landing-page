import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">

<div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[14px]"
        style={{
          background: "linear-gradient(to right, #832232, #B497D6)"
        }}
      />
      <div className="w-[1108px] mx-auto grid grid-cols-5 gap-x-8">
        {/* First Column */}
        <div className="flex flex-col space-y-2 font-calibri">
          <a href="#" className="text-left text-[14px] underline underline-offset-4">
            Home
          </a>
          <a href="#" className="text-left text-[14px] underline underline-offset-4">
            Services
          </a>
        </div>

        {/* Second Column */}
        <div className="flex flex-col space-y-2 font-calibri">
          <a href="#" className="text-left text-[14px] underline underline-offset-4">
            Services
          </a>
          <a href="#" className="text-left text-[14px] underline underline-offset-4">
            Game Designing
          </a>
          <a href="#" className="text-left text-[14px] underline underline-offset-4">
            Game Development
          </a>
          <a href="#" className="text-left text-[14px] underline underline-offset-4">
            Web Development
          </a>
          <a href="#" className="text-left text-[14px] underline underline-offset-4">
            Front-End Development
          </a>
        </div>

        {/* Third Column */}
        <div className="flex flex-col space-y-2 font-calibri">
          <a href="#" className="text-left text-[14px] underline underline-offset-4">
            Asset Store
          </a>
          <a href="#" className="text-left text-[14px] underline underline-offset-4">
            Game Store
          </a>
          <a href="#" className="text-left text-[14px] underline underline-offset-4">
            Web Store
          </a>
        </div>

        {/* Fourth Column */}
        <div className="flex flex-col space-y-2 font-calibri">
          <a href="#" className="text-left text-[14px] underline underline-offset-4">
            About Us
          </a>
          <a href="#" className="text-left text-[14px] underline underline-offset-4">
            Contact Us
          </a>
        </div>

        {/* Fifth Column */}
        <div className="flex flex-col space-y-4 items-end font-calibri">
          <div className="flex items-center space-x-2">
            <span className="text-[12px]">@companyName</span>
            <img
              src="/Instagram_x2.svg" 
              alt="Company Logo"
              className="w-[30px] h-[30px]"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[12px]">Company@facebook.com</span>
            {/* <img
              src="=/Facebook1_x2.svg" 
              alt="Company Logo"
              className="w-[30px] h-[30px]"
            /> */}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[12px]">@companyName</span>
            <img
              src="/X1_x2.svg" 
              alt="Company Logo"
              className="w-[30px] h-[30px]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-[10px] mt-8 font-calibri">
        Copyright ©. All rights reserved, {`{Company Name}`} and {`{Company Name Logo}`}
      </div>
    </footer>
  );
};

export default Footer;
