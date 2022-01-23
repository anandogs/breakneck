import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/index.css";
import landingBg from "../images/landing_bg.png";
import landingBgTab from "../images/landing_bg_tab.png";

const IndexPage = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <main>
      <Header isOpen={isOpen} setOpen={setOpen} />
      <div
        className="relative h-[100vh] lg:h-[100vh]"
        onClick={() => setOpen(false)}
      >
        <img className="lg:hidden h-[100vh] w-screen" src={landingBg} />
        <img className="hidden lg:block h-[100vh] w-screen" src={landingBgTab} />
        <div className="absolute top-[78.625vh] lg:top[83.71vh] w-[84.167vw] lg:w-[30.32vw] right-0 lg:right-[56.19vw] lg:left-[13.48vw] bg-[#FF4800]">
          <div className="mt-[3.125vh] lg:mt-[3.93vh] ml-[8.0555555556vw] lg:ml-[2.84vw] mr-[8.0555555556vw] lg:mr-[2.84vw]">
            <div className="font-brother text-h3-fluid leading-h3-fluid tracking-wider">
              NEXT TRIP
            </div>
            <div className="font-thunderhouse text-h1-fluid leading-h1-fluid">
              Havelock Island
            </div>
            <div className="font-brother text-coordinates leading-coordinates mb-[2.25vh]">
              11.9761° N, 92.9876° E
            </div>
            <hr className="border-black" />
            <div className="mt-[2.25vh] lg:mt-[1.969561325vh] font-brother text-h3-fluid leading-h3-fluid tracking-wider">
              ADVENTURE
            </div>
            <div className="font-thunderhouse text-h2-fluid leading-h2-fluid">
              SCUBA diving
            </div>
            <div className="font-brother text-p-fluid leading-p-fluid mb-[1.875vh] lg:mb-[3.2229185318vh]">
              PADI or SSI Open Water Course and Advanced Open Water Course
            </div>
            <hr className="border-black" />
            <div className="mt-[2.25vh] lg:mt-[1.969561325vh] font-brother text-h3-fluid leading-h3-fluid tracking-wider">
              DATES
            </div>
            <div className="font-thunderhouse text-h2-fluid leading-h2-fluid">
              10 – 20 March 2022
            </div>
            <div className="w-[11.3888888889vw] lg:w-[5.3240740741vw] bg-black p-[.375rem] text-[#FF4800] flex items-center justify-center mb-[8.3333333333vw] lg:mb-[2.0833333333vw]">
              <p className="font-brother text-[0.5625rem] lg:text-[1.125rem] leading-[.6875rem] lg:leading-[1.35rem] tracking-wider">
                MORE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[42.7777777778vw] max-h-[158px] lg:h-[13.7869292748vh] bg-black"></div>
      <Footer text='SCREW THE BUTS AND The WHAT IFS'/>
    </main>
  );
};

export default IndexPage;
