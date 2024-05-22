import { IoArrowUpOutline } from "react-icons/io5";
import '@fontsource/montserrat'
import NavResponsiveMenu from "./NavResponsiveMenu";
import { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import React from "react";

export const menuListBase = <>

<a className=" " href="/#how-it-works" >How empX works</a>
                <a className=" " href="/pricing">Pricing</a>
                <a className=" " href="/#why-empx">Why choose us?</a>
                <a className=" " href="/#our-vision">Our Vision</a>
                <a className=" " href="/about">About Us</a>
                <a className=" " href="/contact">Contact us</a>
</> 
export const menuListBold = 
<>
<a className=" font-semibold font-custom1" href="/#how-it-works" >How empX works</a>
<a className=" font-semibold font-custom1" href="/pricing">Pricing</a>
<a className=" font-semibold font-custom1" href="/#why-empx">Why choose us?</a>
<a className=" font-semibold font-custom1" href="/#our-vision">Our Vision</a>
<a className=" font-semibold font-custom1" href="/about">About Us</a>
<a className=" font-semibold font-custom1" href="/contact">Contact us</a>
</>


export default function Nav() {
    const [isOpen,setOpen] = useState(false)
    React.useEffect(()=>{console.log("isopen changed",isOpen);
    },[isOpen])
    return (
        <>
         {/* removed w-screen to fic the side scroll */}
            <nav className=" 3xl:text-2xl relative text-xl flex justify-center items-center h-24 bg-backgroundGray ">
                
                <a href="/" className="absolute left-4 w-36  ">
                    <img className=" " width={200} height={200} src="src/images/empxLogo.png" alt="Example Image" />
                </a>
                <ul className="utxl:hidden ut2xl:px-52 2xl:px-72 max-w-[100rem] w-screen flex items-center justify-between text-textGray  3xl:p-5 font-custom1 ">
                    {menuListBase}
                </ul>
                
                <div className="utxl:hidden absolute right-4 " >
                    <button className="  text-xl w-[10.75rem] border-4 border-textGray text-textGray font-custom1 font-bold rounded-3xl h-[3.75rem]  flex items-center justify-center">Get Demo <div className=" ml-4"><IoArrowUpOutline className=" rotate-90" /></div> </button> 
                </div>
                <div className="xl:hidden absolute right-4 z-50 " >
                    <Hamburger toggled={isOpen} toggle={setOpen} /> 
                </div>
            </nav>
            <NavResponsiveMenu openState={isOpen}></NavResponsiveMenu>
        </>
    )
}

