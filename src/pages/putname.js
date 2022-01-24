import React, {useState} from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import Checkout from '../components/checkout';

const PutName = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <Header isOpen={isOpen} setOpen={setOpen}/>
            <div onClick={() => setOpen(false)}> 
            <div className="h-[7.75rem]"/>
            <div className="ml-[5.3125rem] w-[11.1875rem] mb-[2.1025rem]">
                <h2 className="font-thunderhouse text-[#00D4C5] text-[1.875rem] leading-[1.93125rem] rotate-[2.77deg]">
                PUT YOUR NAME DOWN
                </h2>
                </div>
                <div>
                    <form>
                    <div className="relative h-[1.9125rem] mb-[0.8125rem]">
                        <label className="absolute ml-[3.5625rem] font-thunderhouse text-[1.125rem] leading-[1.15875rem] mt-[0.8125rem] ">
                            First Name
                        </label>
                        <input className="absolute ml-[9.0625rem] font-brother uppercase text-[0.5625rem] leading-3 mb-[0.8125rem] w-[11.375rem] h-[2.7rem]">
                        
                        </input>
                        
                        </div>
                        <hr className="ml-[3.5625rem] mr-[2.0625rem] border-black"/>

                        <div className="relative h-[1.9125rem] mb-[0.8125rem]">
                        <label className="absolute ml-[3.5625rem] font-thunderhouse text-[1.125rem] leading-[1.15875rem] mt-[0.8125rem] ">
                            Last Name
                        </label>
                        <input className="absolute ml-[9.0625rem] font-brother uppercase text-[0.5625rem] leading-3 mb-[0.8125rem] w-[11.375rem] h-[2.7rem] ">
                        
                        </input>
                        
                        </div>
                        <hr className="ml-[3.5625rem] mr-[2.0625rem] border-black"/>
                        <div className="relative h-[1.9125rem] mb-[0.8125rem]">
                        <label className="absolute ml-[3.5625rem] font-thunderhouse text-[1.125rem] leading-[1.15875rem] mt-[0.8125rem] ">
                            EMAIL
                        </label>
                        <input className="absolute ml-[9.0625rem] font-brother uppercase text-[0.5625rem] leading-3 mb-[0.8125rem] w-[11.375rem] h-[2.7rem] ">
                        
                        </input>
                        
                        </div>
                        <hr className="ml-[3.5625rem] mr-[2.0625rem] border-black"/>
                        <div className="relative h-[1.9125rem] mb-[0.8125rem]">
                        <label className="absolute ml-[3.5625rem] font-thunderhouse text-[1.125rem] leading-[1.15875rem] mt-[0.8125rem] ">
                            PHONE
                        </label>
                        <input className="absolute ml-[9.0625rem] font-brother uppercase text-[0.5625rem] leading-3 mb-[0.8125rem] w-[11.375rem] h-[2.7rem] ">
                        
                        </input>
                        
                        </div>
                        <hr className="ml-[3.5625rem] mr-[2.0625rem] border-black"/>
                        <div className="relative h-[8.9375rem] mb-[0.8125rem]">
                        <label className="absolute ml-[3.5625rem] font-thunderhouse text-[1.125rem] leading-[1.15875rem] mt-[0.8125rem] w-[4rem]">
                        ANY MEDICAL CONDITIONS? GET A ‘FIT TO DIVE’ CERT FROM YOUR DOC. NO CERT, NO DIVES.
                        </label>
                        <textarea className="absolute ml-[9.0625rem] font-brother uppercase text-[0.5625rem] leading-3 mb-[0.8125rem] w-[11.375rem] mt-[1.1875rem] h-[7.5rem]">
                        
                        </textarea>
                        
                        </div>
                        <hr className="ml-[3.5625rem] mr-[2.0625rem] border-black mb-[1rem]"/>
                        <button className="bg-[#FF4800] h-[1.3125rem] w-[2.8125rem] ml-[9.0625rem] mb-[1.3125rem]">
                            <p className="font-brother text-[0.5625rem] leading-[0.675rem] tracking-wider">I'M ON</p>
                        </button>
                        <Checkout/>                        
                    </form>
                    </div>
                </div>
            <Footer text='shape up or ship out'/>
            
            
        </div>
    )
}

export default PutName