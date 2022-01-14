import React, {useState} from "react";
import Header from "../components/header"
import Footer from "../components/footer"
import havelock from '../images/havelock22-1.png'

const Havelock22 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="flex flex-col">
        <Header isOpen={isOpen} setOpen={setOpen}/>
        <div onClick={() => {setOpen(false)}}>
        <div className="h-mob"/>
        <div className="h-[7.2rem] relative">
            <p className="absolute ml-[1.6875rem] font-thunderhouse text-havelock-mob leading-havelock-mob text-[#0349F7] z-20 rotate-[-2.87deg]">
            HAVELOCK 22
            </p>
            <p className="absolute ml-[3.4376rem] font-thunderhouse text-[5rem] leading-[5.15rem] top-[1rem]">
            SCUBA DIVING
            </p>
        
        
        </div>
        <div className="ml-[5.375rem] font-brother leading-3 ">
            <p className="text-[#0349F7] tracking-wider text-[.625rem] mb-[.5rem]">
            WHAT YOU WALK AWAY WITH
            </p>
            <p className="text-[.5625rem] mr-[2.0625rem] mb-[1.8125rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
            <div>
                <img className="mr-[2.0625rem] h-[27.5rem] mb-[1.8125rem]" src={havelock}/>
            </div>
            <div className="ml-[5.375rem] font-brother leading-3 ">
            <p className="text-[#0349F7] tracking-wider text-[.625rem] mb-[.5rem]">
            THE WILDNESS OF HAVELOCK ISLAND
            </p>
            <p className="text-[.5625rem] mr-[2.0625rem] mb-[1.8125rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
            <div>
                <img className="ml-[1.5rem] h-[27.5rem] mb-[2.54375rem] rotate-[-2.21deg]" src={havelock}/>
            </div>
            <div>
                <p className="mb-4 ml-[3.625rem] text-[#0349F7] font-brother text-[.625rem] leading-3 tracking-wider">
                THE PLAN
                </p>
                </div>
                <div className="h-[3.6rem] relative">
            <p className="absolute ml-[3.6875rem] font-thunderhouse text-[1.5625rem] leading-[1.609375rem] text-[#0349F7]">
            theory padi / ssi open water
            </p>
            <p className="absolute ml-[4.1875rem] font-thunderhouse text-[1.875rem] leading-[1.93125rem] top-[.8rem] rotate-[-2.14deg]">
            FEB 27 (SESSION 1)
            </p>
            </div>
            <div>
                <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[2.25rem] leading-3">
                The theory will be sent online in video format once you register for the trip. The instructor will be online from XX PM – XX PM to answer any doubts or questions.
                </p>
            </div>
            <div className="h-[3.6rem] relative">
            <p className="absolute ml-[3.6875rem] font-thunderhouse text-[1.5625rem] leading-[1.609375rem] text-[#0349F7]">
            theory padi / ssi open water
            </p>
            <p className="absolute ml-[4.1875rem] font-thunderhouse text-[1.875rem] leading-[1.93125rem] top-[.8rem] rotate-[-2.14deg]">
            MAR 06 (SESSION 2)
            </p>
            </div>
            <div>
                <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[2.25rem] leading-3">
                The theory will be sent online in video format once you register for the trip. The instructor will be online from XX PM – XX PM to answer any doubts or questions.
                </p>
            </div>
            <div className="h-[3.6rem] relative">
            <p className="absolute ml-[3.6875rem] font-thunderhouse text-[1.5625rem] leading-[1.609375rem] text-[#0349F7]">
            DAY 1
            </p>
            <p className="absolute ml-[4.1875rem] font-thunderhouse text-[1.875rem] leading-[1.93125rem] top-[.8rem] rotate-[-2.14deg]">
            MAR 10
            </p>
            </div>
            <div>
                <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[2rem] leading-3">
                Meet in Port Blair at Something Hotel at 5 PM.
                </p>
            </div>
            <div className="h-[3.6rem] relative">
            <p className="absolute ml-[3.6875rem] font-thunderhouse text-[1.5625rem] leading-[1.609375rem] text-[#0349F7]">
            DAY 2
            </p>
            <p className="absolute ml-[4.1875rem] font-thunderhouse text-[1.875rem] leading-[1.93125rem] top-[.8rem] rotate-[-2.14deg]">
            MAR 11
            </p>
            </div>
            <div>
                <h3 className="font-thunderhouse ml-[5.375rem] text-[1.25rem] leading-3 mb-[0.4375rem]">
                12.30 pm
                </h3>
                <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[0.8125rem] leading-3">
                Meet at <span className="text-[#00D4C5]">Haddo Jetty</span> to catch the <span className="text-[#00D4C5]">Makruzz</span> ferry from Portblair to Havelock.
                </p>
                <h3 className="font-thunderhouse ml-[5.375rem] text-[1.25rem] leading-3 mb-[0.4375rem]">
                3 pm
                </h3>
                <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[0.8125rem] leading-3">
                Check in to <span className="text-[#00D4C5]">Green Imperial.</span> Grab late lunch.
                </p>
                <h3 className="font-thunderhouse ml-[5.375rem] text-[1.25rem] leading-3 mb-[0.4375rem]">
                5 pm
                </h3>
                <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[0.8125rem] leading-3">
                Meet at <span className="text-[#00D4C5]">Scubalov</span> to get your gear sizing on point and fill up <span className="text-[#00D4C5]">medical</span> forms.</p>
                <h3 className="font-thunderhouse ml-[5.375rem] text-[1.25rem] leading-3 mb-[0.4375rem]">
                8 pm
                </h3>
                <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[0.8125rem] leading-3">
                <span className="text-[#FF4800]">BONFIYYYAAAHHH</span> at Beach No. 3.</p>
            </div>
            <div className="h-[3.6rem] relative">
            <p className="absolute ml-[3.6875rem] font-thunderhouse text-[1.5625rem] leading-[1.609375rem] text-[#0349F7]">
            DAY 3
            </p>
            <p className="absolute ml-[4.1875rem] font-thunderhouse text-[1.875rem] leading-[1.93125rem] top-[.8rem] rotate-[-2.14deg] z-20">
            MAR 12
            </p>
            <p className="absolute ml-[7.875rem] font-thunderhouse text-[1.125rem] leading-[1.15875rem] top-[1.7rem] text-[#8BCEE3]">
            THE DIVING BEGINNNSSS!
            </p>
            </div>
            <div>
                <h3 className="font-thunderhouse ml-[5.375rem] text-[1.25rem] leading-3 mb-[0.4375rem]">
                6 am
                </h3>
                <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[0.8125rem] leading-3">
                Meet at Scubalov to begin your Confined Open Water 1.
                </p>
                <h3 className="font-thunderhouse ml-[5.375rem] text-[1.25rem] leading-3 mb-[0.4375rem]">
                12 noon
                </h3>
                <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[0.8125rem] leading-3">
                Lunch.
                </p>
                <h3 className="font-thunderhouse ml-[5.375rem] text-[1.25rem] leading-3 mb-[0.4375rem]">
                5 pm
                </h3>
                <p className="font-brother text-[.5625rem] ml-[5.375rem] mr-[2rem] mb-[1.4375rem] leading-3">
                Breathing workshop at Something something.
                </p>
                <div className="bg-[#FF4800] h-[1.3125rem] w-[3.875rem] flex items-center justify-center ml-[5.75rem] mb-[1.4375rem]">
                    <p className="font-brother text-[0.5625rem] leading-[0.675rem] tracking-wider">I’M DOWN</p>
                </div>

            </div>        
      <Footer text='skill trumps'/>
      </div>
        </div>
    )
}

export default Havelock22