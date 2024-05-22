import { IoArrowForward } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

export default function ContactUs() {
    return (
        <>
            <div className=" lg:h-screen">
                <div className=" h-full w-full flex utlg:mb-5 utlg:mt-5 ">

                    <div className=" ut2xl:hidden w-full h-full  flex justify-center items-center">
                        <div className="  w-3/4 h-3/4 text-secondBackgroundGray ">
                            <p className=" text-7xl font-custom1">
                                Ready to unlock your team's full potential?
                            </p>


                        </div>
                    </div>
                    <div className=" w-full flex items-center">

                        <form action="https://formcarry.com/s/xCrldLw07XA" method="POST" className=" w-full  h-fit  flex justify-center items-center ">
                            <div className=" bg-gradient-to-bl from-secondBackgroundGray to-textGray w-3/4 h-3/4 rounded-2xl flex flex-col justify-center items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                                <div className=" w-11/12 h-full flex flex-col justify-center gap-20 ut2xl:items-center">
                                    <h1 className=" text-white text-5xl utlg:2xl font-custom1 mt-10 utlg:text-center ">Let's get in touch! </h1>




                                    <div className="w-full flex utlg:flex-col gap-10">
                                        <div className="w-full ">
                                            <p className=" text-white font-custom1 mb-2">Full Name * </p>
                                            <input name="full name" required placeholder="Enter your full name" className="w-full p-4 rounded-md" type="text" />
                                        </div>
                                        <div className="w-full ">
                                            <p className=" text-white font-custom1 mb-2">Company *</p>
                                            <input required name="company" placeholder="Enter the name of your company" className="w-full p-4 rounded-md" type="text" />
                                        </div>
                                    </div>

                                    <div className=" w-full flex utlg:flex-col  gap-10">
                                        <div className="w-full  ">
                                            <p className=" text-white font-custom1 mb-2">Email</p>
                                            <input name="email" required placeholder="Enter your email" className="w-full p-4 rounded-md" type="text" />
                                        </div>
                                        <div className=" w-full ">
                                            <p className=" text-white font-custom1 mb-2">Phone Number</p>
                                            <input name="phone number" placeholder="Enter your phone number" className="w-full p-4 rounded-md " type="text" />
                                        </div>
                                    </div>

                                    <div className=" w-full flex">
                                        <div className="w-full ">
                                            <p className=" text-white font-custom1 mb-2">Your Message</p>
                                            <input name="message" placeholder="Type your message here" className="w-full pb-32 p-4 rounded-md" type="text" />
                                        </div>
                                    </div>
                                    <div className=" m-2 flex text-white  justify-center  jus items-center text-3xl ">
                                        <button
                                            className="overflow-hidden border-2 flex  gap-2  justify-center items-center  w-32 p-2 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                                        >
                                            Submit <div className="">
                                           < IoArrowForward/>
                                            </div>
                                            <span
                                                className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                                            ></span>
                                            <span
                                                className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                                            ></span>
                                            <span
                                                className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                                            ></span>
                                            <span
                                                className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                                            >Submit🎉</span>
                                        </button>

                                    </div>
                                    <div className=" w-full flex justify-center text-white mb-10 font-custom1 text-center">

                                        <p> We'd love to answer any questions you have, but if you're ready to take the next step, leave the message blank. We'll come back to you as soon as possible.</p>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}