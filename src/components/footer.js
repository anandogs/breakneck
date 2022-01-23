import React from "react";
import logoWhite from "../images/logo-white.png";
import insta from "../images/insta.png";

const Footer = (props) => {
  return (
    <div className="pt-[10.5555555556vw] lg:pt-[16.9560185185vw] bg-black w-screen order-last">
      <div className="ml-[15.83vw] lg:ml-[26.8vw] w-[75vw] lg:w-[66vw]">
        <p className=" font-thunderhouse text-white text-footer-fluid-h1 leading-footer-fluid-h1 rotate-[-3.51deg]">
          {props.text}
        </p>
      </div>
      <div className="mt-[9.1666666667vw] lg:mt-[8.0439814815vw] ml-[15.8333333333vw] mr-[8.8888888889vw] flex items-end justify-between pb-[2.125vh] lg:pb-[8.6839749329vh]">
        <div className="">
          <img
            className="w-[28.6111111111vw] lg:w-[17.1157407407vw]"
            src={logoWhite}
          />
        </div>
        <div>
          <img className="w-[4.025vw] lg:hidden" src={insta} />
        </div>
        <div className=" w-[7.4375rem] lg:hidden">
          <p className="text-white font-brother text-[.5rem] text-right">
            © Breakneck 2022 <br />
            Designed + built by Tide x Tide
          </p>
        </div>
        <div className="hidden lg:flex flex-row">
          <div>
            <img className="w-[1.5046296296vw]" src={insta} />
          </div>

          <p className="text-white font-brother text-footer-fluid-p leading-footer-fluid-p text-right ml-[2.3726851852vw]">
            © Breakneck 2022
          </p>
          <p className="text-white font-brother text-footer-fluid-p leading-footer-fluid-p text-right ml-[2.3726851852vw]">
            Designed + built by Tide x Tide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
