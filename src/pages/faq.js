import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const FAQ = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <Header isOpen={isOpen} setOpen={setOpen}/>
            <div>
            <div className="h-mob"/>
                <div className="ml-[5.3125rem] w-[11.1875rem] mb-[2rem]">
                <h2 className="font-thunderhouse text-[#0349F7] text-[1.875rem] leading-[1.93125rem]">
                FAQs
                </h2>
                </div>
                <div className="ml-[5.375rem] font-brother leading-3 ">
            <p className="text-[#0349F7] tracking-wider text-[.625rem] mb-[.5rem] uppercase w-[15.0625rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>
            <p className="text-[.5625rem]  mb-[2.0625rem] w-[15.0625rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-[#0349F7] tracking-wider text-[.625rem] mb-[.5rem] uppercase w-[15.0625rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>
            <p className="text-[.5625rem]  mb-[2.0625rem] w-[15.0625rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-[#0349F7] tracking-wider text-[.625rem] mb-[.5rem] uppercase w-[15.0625rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>
            <p className="text-[.5625rem]  mb-[2.0625rem] w-[15.0625rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-[#0349F7] tracking-wider text-[.625rem] mb-[.5rem] uppercase w-[15.0625rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>
            <p className="text-[.5625rem]  mb-[2.0625rem] w-[15.0625rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>



            </div>
                <Footer text='more balls than talent'/>
            </div>
        </div>
    )
}

export default FAQ