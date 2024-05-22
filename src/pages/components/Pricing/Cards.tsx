import { FaRegCircleCheck } from "react-icons/fa6";


export default function Cards() {
    return (
        <>
            <div className="  bg-backgroundGray font-custom1 text-white ">
                <div className="  flex justify-center text-black">
                    <div className=" w-1/2 utlg:w-full m-10 flex flex-col justify-center items-center text-center ">

                        <h1 className=" text-5xl font-bold mt-10  "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore?</h1>
                        <p className=" text-2xl text-textGray mt-10 mb-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse blanditiis libero magni! Ut sit magnam maiores beatae, explicabo tempore harum.</p>
                        <p className=" text-xl bg-yellow-200 w-fit rounded-lg p-1 pl-2 pr-2 font-bold"> Free trial for a limited time </p>
                    </div>
                </div>

                <div className=" flex utlg:flex-col utlg:items-center m-5 justify-center gap-10">
                    <div className=" p-5 utlg:w-11/12 ut3xl:w-1/3  w-1/6   bg-secondBackgroundGray rounded-2xl flex flex-col items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                        <h1 className=" font-bold text-4xl mt-20"> Starter</h1>
                        <p className=" mt-4 text-lg"> For small team 🎨 </p>
                        <h1 className=" font-bold text-5xl mt-8">$50k/mo</h1>
                        <div className=" w-full h-full  mt-20">
                            <div className="utlg:flex utlg:flex-col utlg:items-center utlg:justify-center">

                                <p className="w-fit font-bold lg:ml-8 mb-5">Features Included:</p>
                                <ul className=" lg:ml-8 text-whiteReplace ">
                                    <div className=" w-fit">

                                        <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />1 space</li>
                                        <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />2 video testimonials in total</li>
                                        <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />10 text testimonials in total</li>
                                        <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />Create up to 5 tags</li>
                                        <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />Limited 3rd-party imports</li>
                                        <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />Limited number of tags</li>
                                        <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />Public Testimonial page</li>
                                        <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />Wall of Love with our logo</li>
                                    </div>
                                </ul>

                            </div>
                        </div>
                        <button className=" w-10/12 bg-textGray mb-5 p-5 rounded-xl text-xl font-bold"> Get Started</button>
                    </div>

                    <div className=" p-5 utlg:w-11/12 ut3xl:w-1/3  w-1/6 bg-secondBackgroundGray rounded-2xl flex flex-col items-center border-4 border-green-500 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                        <div className="  w-full">
                            <p className=" relative bottom-10 left-5 bg-green-500 text-textGray font-bold w-fit p-2 rounded-2xl ">Best for most users</p>
                        </div>

                        <h1 className=" font-bold text-4xl mt-8">Premium</h1>
                        <p className=" mt-4 text-lg"> For growing businesses📈 </p>
                        <h1 className=" font-bold text-5xl mt-8">$100m/mo</h1>
                        <div className=" w-full h-full mt-20">
                            <div className="utlg:flex utlg:flex-col utlg:items-center utlg:justify-center">
                                <p className=" font-bold lg:ml-8 mb-5">Everything in Starter, and:</p>
                                <ul className=" lg:ml-8 text-whiteReplace">
                                    <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />1 space</li>
                                    <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />2 video testimonials in total</li>
                                    <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />10 text testimonials in total</li>
                                    <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />Create up to 5 tags</li>
                                    <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />Limited 3rd-party imports</li>
                                    <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />Limited number of tags</li>
                                    <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />Public Testimonial page</li>
                                    <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />Wall of Love with our logo</li>
                                </ul>

                            </div>
                        </div>
                        <button className=" w-10/12  bg-textGray mb-5 p-5 rounded-xl text-xl font-bold"> Get Started</button>
                    </div>

                    <div className=" p-5 utlg:w-11/12 ut3xl:w-1/3 w-1/6 bg-secondBackgroundGray rounded-2xl flex flex-col items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                        <h1 className=" font-bold text-4xl mt-20">Ultimate</h1>
                        <p className=" mt-4 text-lg"> For large businesses 🏢 </p>
                        <h1 className=" font-bold text-5xl mt-8">$500b/mo</h1>
                        <div className=" w-full h-full mt-20">
                            <div className="utlg:flex utlg:flex-col utlg:items-center utlg:justify-center">
                                <p className=" font-bold lg:ml-8 mb-5">Everything in Premium, plus:</p>
                                <ul className=" lg:ml-8 text-whiteReplace">
                                    <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />1 space</li>
                                    <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />2 video testimonials in total</li>
                                    <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />10 text testimonials in total</li>      
                                    <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />Create up to 5 tags</li>
                                    <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />Limited 3rd-party imports</li>
                                    <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />Limited number of tags</li>
                                    <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />Public Testimonial page</li>
                                    <li className="mb-4"><FaRegCircleCheck className="inline-block mr-2 text-green-500" />Wall of Love with our logo</li>
                                </ul>
                            </div>
                        </div>
                        <button className=" w-10/12 bg-textGray mb-5 p-5 rounded-xl text-xl font-bold"> Get Started</button>
                    </div>


                </div>
            </div>
        </>
    )
}
