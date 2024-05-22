import { IoArrowUpOutline } from "react-icons/io5";
import Chatbubble from "./chatbubble"

export default function Main() {
    return (
        <div className="utlg:py-24 py-12 bg-backgroundGray flex utlg:flex-col utxl:px-4 utxl:gap-12 items-center justify-center 3xl:h-screen">





            {/* Maybe find a better way instead of using <br>F */}
            <div className=" font-custom1 h-[90%] xl:w-[50%] w-[80%] ml-12 flex flex-col justify-center ">
                <section className="utxl:self-start">
                <h1 className=" text-xl   sm:text-2xl  3xl:text-7xl xl:text-5xl md:text-4xl">The Next Generation Tool  <br />
                    for Customer Facing Teams</h1>
                <div className=" mt-5">
                    <h2 className=" utmd:text-base md:text-xl xl:text-2xl ">With empX your employees can directly <br />
                        query your uploaded company data to better <br /> perform their job and help customers.</h2>
                </div>

                <div>
                    <button className=" bg-textGray text-white mt-5 flex items-center  p-2 text-xl xl:p-4 xl:text-4xl rounded-xl ">Get Started <IoArrowUpOutline className="ml-4 rotate-45" /> </button>
                </div>
                </section>
                

            </div>

           {false ? <Chatbubble /> : <img className="utlg:w-auto lg:max-h-[80vh] utmd:max-w-96 utsm:max-w-72   utxl:w-[25rem]  md:mr-12 " src="/chatbg.svg"/>}


            

        </div>
    )
}