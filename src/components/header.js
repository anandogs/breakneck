import React from "react";
import logo from '../images/logo.png'
import burgerClosed from '../images/burger-closed.png'
import burgerOpen from '../images/burger-open.png'

const Header = () => {
    return (
        <div className="h-mob absolute z-10 flex items-center">
            <img className="h-[1.5625rem] ml-[2.25rem]" src={burgerClosed}/>
            <img className="h-[2.22rem] ml-[1.75rem]" src={logo}/>
        </div>
    )
}

export default Header