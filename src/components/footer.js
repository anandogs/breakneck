import React from "react";
import logoWhite from "../images/logo-white.png";
import insta from "../images/insta.png";

const Footer = () => {
    
    return (
        <div className="h-mob-foot pt-[2.375rem] bg-black">
        <div  className=" ml-[3.28375rem] w-[17.2rem] h-[9.625rem]">
            <p className="font-thunderhouse text-white text-[4.5rem] leading-[2.8125rem] rotate-[-3.51deg]">
            SCREW THE BUTS AND THE WHAT IFS
            </p>
        </div>
        <div className="pt-[0.79625rem] pl-[3.5625rem] pr-[2rem] flex items-end justify-between">
            <div className="">
                <img className="h-[2.22rem]" src={logoWhite}/>
            </div>
            <div>
                <img className="h-[0.875rem]" src={insta}/>
            </div>
            <div className=" w-[7.4375rem]">
                <p className="text-white font-brother text-[.5rem] text-right">© Breakneck 2022 <br/>Designed + built by Tide x Tide</p>
                </div>
        </div>
        </div>
    )
}

export default Footer