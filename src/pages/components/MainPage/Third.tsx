import { GoClock } from "react-icons/go";
import { GoRocket } from "react-icons/go";
import { BsEraser } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { GoBook } from "react-icons/go";

export default function Third() {
    // Third part of the first page
    const containerStyle = "w-full lg:h-60 mb-20 flex items-center  justify-center"
    return (
        <>
            <div id="why-empx" className="pt-20 bg-secondBackgroundGray font-custom1 text-whiteReplace text-3xl ">
                <div className="flex flex-col items-center mb-32">
                    <h1 className="text-4xl font-custom1 font-bold text-whiteReplace">Why Choose Us?</h1>
                </div>
                {/* 34 197 94 */}
                {/* Maybe use grid? */}
                <div className="flex utlg:flex-col flex-wrap">
                    {/* First Column */}
                    <div className="lg:w-1/2 flex flex-col">

                        <div className={containerStyle}>
                            <div className="utlg:w-20 utlg:h-20 utlg:p-2 lg:w-40 lg:h-40 bg-textGray  rounded-3xl utlg:rounded-xl text-white text-8xl flex justify-center items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"><GoClock/>
                            </div>
                            <div className=" w-1/2 h-full ml-5 flex flex-col justify-center">
                                <h1 className=" mb-3 font-bold">Elevating Customer Service </h1>
                                <p className=" text-xl">24/7 availability, quick and reliable answers to customer inquiries, ensuring consistent
                                    satisfaction for both the customer and staff.
                                </p>
                            </div>
                        </div>

                        <div className={containerStyle}>
                            <div className="utlg:w-20 utlg:h-20 utlg:p-2 w-40 h-40 bg-textGray  rounded-3xl utlg:rounded-xl text-white text-8xl flex justify-center items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"> <GoRocket/></div>
                            <div className=" w-1/2 h-full ml-5 flex flex-col justify-center">
                                <h1 className=" mb-3 font-bold">Accelerating Training and Boosting Employee Skills</h1>
                                <p className=" text-xl">Accelerated training helps your team become more independent and less reliant on constant
                                    supervision. Ensure your staff handles even the toughest customer inquiries seamlessly.</p>
                            </div>
                        </div>

                        <div className={containerStyle}>
                            <div className="utlg:w-20 utlg:h-20 utlg:p-2  w-40 h-40 bg-textGray rounded-3xl utlg:rounded-xl text-white text-8xl flex justify-center items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"> <BsEraser/></div>
                            <div className=" w-1/2 h-full ml-5 flex flex-col justify-center">
                                <h1 className=" mb-3 font-bold">Reducing the Risk of Errors</h1>
                                <p className=" text-xl">Reduce the risk of errors in customer communications by providing accurate and up-to-date information.</p>
                            </div>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="lg:w-1/2 flex flex-col gap">
                        <div className={containerStyle}>
                            <div className="utlg:w-20 utlg:h-20 utlg:p-2  w-40 h-40 bg-textGray rounded-3xl utlg:rounded-xl text-white text-8xl flex justify-center items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"> <GoShieldCheck/></div>
                            <div className=" w-1/2 h-full ml-5 flex flex-col justify-center">
                                <h1 className=" mb-3 font-bold">Protecting Your Data</h1>
                                <p className=" text-xl">We're serious about your security your data is safeguarded and easily wiped away at your command.</p>
                            </div>
                        </div>

                        <div className={containerStyle}>
                            <div className="utlg:w-20 utlg:h-20 utlg:p-2  w-40 h-40 bg-textGray rounded-3xl utlg:rounded-xl text-white text-8xl flex justify-center items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"> <GoBook/></div>
                            <div className=" w-1/2 h-full ml-5 flex flex-col justify-center">
                                <h1 className=" mb-3 font-bold">Retaining Core Knowledge</h1>
                                <p className=" text-xl">Essential knowledge remains within your company, even as key members of the team leave.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}