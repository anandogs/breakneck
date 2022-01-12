import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../css/index.css"
import landingBg from '../images/landing_bg.png'


const IndexPage = () => {
  return (
    <main>
      <Header/>
      <div className="relative h-[50rem]" >
      <img src={landingBg}/>
      <div className="absolute top-[79.625%] h-[20.3125rem] w-[84.167%] right-0 bg-[#FF4800]" >
        <div className="mt-[1.5625rem] ml-[1.8125rem] mr-[1.8125rem]">
        <div className="font-brother text-[0.625rem] leading-3 tracking-wider mb-mob-content">
        NEXT TRIP
        </div>
        <div className="font-thunderhouse text-[1.875rem] leading-[1.9375rem] mb-2.5">
        Havelock Island
        </div>
        <div className="font-brother text-[.5625rem] leading-[.6875rem] mb-[1.125rem]">
        11.9761° N, 92.9876° E
        </div>
        <hr className="border-black"/>
        <div className="mt-[1.125rem] font-brother text-[0.625rem] leading-3 tracking-wider mb-mob-content">
        ADVENTURE
        </div>
        <div className="font-thunderhouse text-[1.375rem] leading-[1.375rem] mb-2.5">
        SCUBA diving
        </div>
        <div className="font-brother text-[.5625rem] leading-[.6875rem] mb-[1.125rem]">
        PADI or SSI Open Water Course and Advanced Open Water Course
        </div>
        <hr className="border-black"/>
        <div className="mt-[1.125rem] font-brother text-[0.625rem] leading-3 tracking-wider mb-mob-content">
        DATES
        </div>
        <div className="font-thunderhouse text-[1.375rem] leading-[1.375rem] mb-2.5">
        10 – 20 March 2022
        </div>
        <div className="w-[2.5625rem] h-[1.3125rem] bg-black p-[.375rem] text-[#FF4800]">
          <p className="font-brother text-[0.5625rem] leading-[.6875rem]">MORE</p>

        </div>
        </div>
        
      </div>
      </div>
      <div className="h-[9.625rem] bg-black"></div>
      <Footer/>
    </main>
  )
}

export default IndexPage
