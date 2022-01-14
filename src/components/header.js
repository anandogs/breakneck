import React, {useState} from "react";
import logo from '../images/logo.png'
import burgerClosed from '../images/burger-closed.png'
import burgerOpen from '../images/burger-open.png'
import { Link } from "gatsby";

const Header = (props) => {
    
    return (
        <div className="relative">
        <div className="h-mob absolute z-30 flex items-center">
            <div onClick={() => props.setOpen(!props.isOpen)}>
            <img className={`${props.isOpen ? 'flex h-[1.5625rem] ml-[1.6rem] mr-[1.05rem]':'hidden'}`} src={burgerOpen}/>            
            <img className={`${props.isOpen ? 'hidden': 'flex h-[1.5625rem] ml-[2.25rem] mr-[1.75rem]'}`} src={burgerClosed}/>
            </div>
            <Link to="/">
            <img className="h-[2.22rem] " src={logo}/>
            </Link>
        </div>
        <div className={`${props.isOpen ? 'bg-[#0349F7] absolute top-[6.25rem] z-30 h-[16.25rem] w-[90.83%]':'hidden'}`}>
            <Link to="/havelock22">
            <div className="h-[2.6575rem] w-[17.07625rem] ml-[1.6875rem] mt-[1.5rem]">
            <p className="font-thunderhouse text-havelock-mob leading-havelock-mob text-[#FF4800]  rotate-[-2.87deg]">HAVELOCK 22</p>
            </div>
            </Link>
            <Link to='/putname'>
            <div className="ml-[7.341875rem] h-[3.674375rem] w-[11.1875rem] mt-[1.9rem] ">
            <p className="font-thunderhouse text-menu-others leading-menu-others text-[#00D4C5] rotate-[2.77deg]">PUT YOUR NAME DOWN</p>
            </div>
            </Link>
            <div className=" flex  mt-[1.665rem] ml-[3.4375rem]">
                <Link to='/hitup'>
                <div className="font-thunderhouse text-menu-others leading-menu-others text-[#EEC124] mr-[2.1875rem]">
                HIT US UP
                </div>
                </Link>
                <Link to='/faq'>
                <div className="font-thunderhouse text-menu-others leading-menu-others text-white rotate-[-4.35deg]">
                FAQs
                </div>
                </Link>
            </div>

            </div>
        </div>
    )
}

export default Header