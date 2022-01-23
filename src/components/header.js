import React, { useState } from "react";
import logo from "../images/logo.png";
import burgerClosed from "../images/burger-closed.png";
import burgerOpen from "../images/burger-open.png";
import { Link } from "gatsby";

const Header = (props) => {
  return (
    <div className="relative">
      <div className="h-mob lg:h-tab absolute z-30 flex items-center lg:items-end w-screen lg:grid lg:grid-cols-4">
        <div className="lg:hidden" onClick={() => props.setOpen(!props.isOpen)}>
          <img
            className={`${
              props.isOpen
                ? "flex w-burger-open ml-burger-open-left mr-burger-open-right"
                : "hidden"
            }`}
            src={burgerOpen}
          />
          <img
            className={`${
              props.isOpen
                ? "hidden"
                : "flex w-burger-closed ml-burger-closed-left mr-burger-closed-right"
            }`}
            src={burgerClosed}
          />
        </div>
        <div className="flex flex-col items-end">
          <Link to="/">
            <img className="w-[29.17vw] max-h-mob lg:w-[17.2vw]" src={logo} />
          </Link>
        </div>
        <div className="hidden lg:flex justify-start lg:z-30 col-span-3 ml-[3.36vw] mr-[11.33vw]">
          <div className="flex justify-around w-screen">
            <Link to="/havelock22">
              <div>
                <p className="font-thunderhouse text-header-fluid-h1 leading-havelock-mob text-[#FF4800]  rotate-[-2.87deg]">
                  HAVELOCK 22
                </p>
              </div>
            </Link>
            <Link to="/putname">
              <div>
                <p className="font-thunderhouse text-header-fluid-h2 leading-menu-others text-[#00D4C5] rotate-[2.77deg]">
                  PUT YOUR NAME DOWN
                </p>
              </div>
            </Link>

            <Link to="/hitup">
              <div className="font-thunderhouse text-header-fluid-h2 leading-menu-others text-[#EEC124]">
                HIT US UP
              </div>
            </Link>
            <Link to="/faq">
              <div className="font-thunderhouse text-header-fluid-h2 leading-menu-others text-black rotate-[-4.35deg]">
                FAQs
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          props.isOpen
            ? "bg-[#0349F7] absolute top-[12.376vh] z-30 md:pl-[22vw] h-[16.25rem] w-[90.83%] max-w-[400px] md:max-w-[90.83%]"
            : "hidden"
        }`}
      >
        <Link to="/havelock22">
          <div className="h-[2.6575rem] w-[17.07625rem] ml-[7.5vw] mt-[1.5rem]">
            <p className="font-thunderhouse text-header-fluid-h1 leading-havelock-mob text-[#FF4800]  rotate-[-2.87deg]">
              HAVELOCK 22
            </p>
          </div>
        </Link>
        <Link to="/putname">
          <div className="ml-[32.63vw] h-[3.674375rem] w-[11.1875rem] mt-[1.9rem] ">
            <p className="font-thunderhouse text-header-fluid-h2 leading-menu-others text-[#00D4C5] rotate-[2.77deg]">
              PUT YOUR NAME DOWN
            </p>
          </div>
        </Link>
        <div className=" flex  mt-[1.665rem] ml-[15.278vw]">
          <Link to="/hitup">
            <div className="font-thunderhouse text-header-fluid-h2 leading-menu-others text-[#EEC124] mr-[9.72vw]">
              HIT US UP
            </div>
          </Link>
          <Link to="/faq">
            <div className="font-thunderhouse text-header-fluid-h2 leading-menu-others text-white rotate-[-4.35deg]">
              FAQs
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
