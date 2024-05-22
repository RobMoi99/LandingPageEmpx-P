import { FcCalendar } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc"

export default function HowitWorks() {
    return (

        // current isnp https://dribbble.com/shots/15818185-How-It-Works
        <>


            <div id='how-it-works' className=" h-screen bg-secondBackgroundGray  flex  justify-center items-center ">
                <div className=" bg-yellow-400 w-full  h-full flex justify-center text-white">
                    <div className=" w-1/2 h-f  bg-black flex flex-col items-center justify-center text-4xl">

                        <div><FcCalendar /></div>
                        <p className="  text-xl">Schedule a Consultation</p>
                        <div className="  text-2xl bg-textGray p-2 rounded-md">Step 1</div>

                        {/* p */}

                    </div>
                </div>
                <div className=" bg-yellow-500 w-full  h-full flex justify-center text-white">
                    <div className=" w-1/2  bg-black flex flex-col items-center justify-center text-4xl">


<div className=" flex flex-col items-center bg-blue-400 ">

                        <div><FcSettings /></div>
                        <p className="  text-xl">Personalized Setup</p>
                        <div className=" w-fit  text-2xl bg-textGray p-2 rounded-md">Step 1</div>
</div>

                        

                    </div>
                </div>
                <div className=" bg-yellow-600 w-full h-full flex justify-center text-white">
                    <div className=" w-1/2  bg-black flex flex-col items-center justify-center text-4xl">

                        <div><FcSportsMode /></div>
                        <p className="  text-xl">Prepared for Launch</p>
                        <div className="  text-2xl bg-textGray p-2 rounded-md">Step 1</div>

                        {/* p */}

                    </div>
                </div>

            </div>

        </>
    )
}