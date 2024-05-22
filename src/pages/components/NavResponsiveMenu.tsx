import { BsFillTelephoneFill } from "react-icons/bs"

import React, { useEffect } from "react"
import { IoIosArrowUp } from "react-icons/io";
import { menuListBold } from "./Nav";
import { IoArrowUpOutline } from "react-icons/io5";

const ResponsiveMenu = ({openState}:{openState:boolean}) => {
  const [hidden, setHidden] = React.useState(true)
  useEffect(()=>{
    if(!openState)
      setTimeout(()=>{setHidden(true)},300)
    else setHidden(false)
  },[openState])/* ${openState && (!isOpenServices && !isOpenAbout ? 'h-[24rem]' : (isOpenServices && isOpenAbout) ? 'h-[30rem]' : 'h-[28rem]')} */
  return (
    <div className={`xl:hidden  bg-secondBackgroundGray  relative ${openState ? 'z-10' : 'z-0'} ${(openState ? ` h-[32rem]  opacity-100` : "h-0 opacity-100 ")} 
     transition-all overflow-hidden duration-500 ease-in-out ${openState && 'shadow-lg'} relative`}>
      
      {/* Menu choices */}
                <ul className=" flex gap-4 py-4 text-whiteReplace flex-col h-full max-w-7xl w-screen items-center justify-around  font-custom1 ">
                  {menuListBold}
                  <button className="  text-xl  right-4 max border-4 border-whiteReplace text-whiteReplace font-custom1 font-bold rounded-3xl p-3 flex items-center">Get Demo <div className=" ml-4"><IoArrowUpOutline className=" rotate-90" /></div> </button>

                </ul>

     

  </div>
  )
}

export default ResponsiveMenu

/* Mobile dropdown menu */

