import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import sherwin from '../images/sherwin.png'

const HitUp = () => {
    
    const [isOpen, setOpen] = useState(false)
    
    return (
        <div>
            <Header isOpen={isOpen} setOpen={setOpen}/>
            <div onClick={() => {setOpen(false)}}>
                <div className="h-mob"/>
                <div className="ml-[5.3125rem] w-[11.1875rem] mb-[2.1025rem]">
                <h2 className="font-thunderhouse text-[#EEC124] text-[1.875rem] leading-[1.93125rem]">
                HIT US UP
                </h2>
                </div>
                <div className="font-brother text-[0.5625rem] leading-[0.675rem] tracking-wider text-white flex ml-[4.5rem] mb-[2.0625rem]">
                    <div className="h-[1.3125rem] w-[5.3125rem] bg-[#FF4800] flex justify-center items-center">
                        <p>WHATSAPP</p>
                    </div>
                    <div className="h-[1.3125rem] w-[3.625rem] bg-[#00D4C5] flex justify-center items-center ml-[1.6875rem]">
                        <p>CALL</p>
                    </div>
                    <div className="h-[1.3125rem] w-[4.625rem] bg-[#0349F7] flex justify-center items-center ml-[1.6875rem]">
                        <p>EMAIL</p>
                    </div>
                </div>
                <div className="mb-[1.75rem]">
                    <img className="h-[24.6875rem]" src={sherwin}/>
                </div>
                <div className="ml-[5.375rem] font-brother leading-3 mb-[1.8125rem]">
            <p className="text-[.5625rem] mr-[2.0625rem]">
            By curating sports (or ‘rushers’) that complement one another, Breakneck will push its rushers to acquire skills that will be transferable across the adventures that are planned across the year.<br/><br/>By harnessing the building blocks of each sport i.e. balance, endurance, patience and discipline, Breakneck aims to help people enhance their mental and physical capabilities while becoming one with nature and themselves. 
            </p>
            </div>


            
            <Footer text='shred your rush'/>
            </div>
        </div>
    )
}

export default HitUp