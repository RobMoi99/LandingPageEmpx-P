import { IoArrowUpOutline } from "react-icons/io5";
import { menuListBase } from "./Nav";

export default function Footer() {
    return (
        <>
            <div className="w-full bg-zinc-800 h-[1px]"></div>
            <div className=" bg-secondBackgroundGray  text-2xl text-whiteReplace  font-custom1 flex utlg:flex-col  items-center ">
                <div className="w-full h-full utlg:pt-10 flex flex-col items-center ">
                    <div>
                        <img className=" w-44 utxl:mb-12" src="src/images/empxLogo2.png" alt="Example Image" />
                        <div className=" opacity-45 mt-5 utlg:hidden">achieve employee excellence</div>
                        <div className="  h-full flex items-end">

                            <p className=" opacity-45 mt-20 text-md utlg:hidden">© empX 2024</p>
                        </div>
                    </div>

                </div>
                <div className=" w-full h-full flex justify-center ">
                    <button className=" lg:text-4xl flex items-center font-bold utlg:mb-10  hover:scale-105 transition-transform"><p>Get Started</p>   <IoArrowUpOutline className=" rotate-90 ml-2" /></button>

                </div>

                <div className="lg:pt-10 h-full w-full flex lg:flex-col items-center justify-center lg:gap-12 gap-4 text-center pb-10  opacity-45 utlg:text-sm">

{menuListBase}

                </div>
                <p className=" opacity-45 text-sm mb-12 lg:hidden">© empX 2024</p>




            </div>
        </>
    )
}