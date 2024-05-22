export default function chatbubble() {
    return
    return (

        // chatbubble text issue then screen gets smaller
        <div className=" h-[90%] w-[35%] flex items-center justify-center ">
            <div className=" h-[80%] w-[80%] rounded-[50px] p-3 bg-gradient-to-br from-chatboxGradiant from-5%  to-backgroundGray to-50%  ">

                <div className="w-full h-1/6 flex flex-col items-end">
                <p className=" font-bold font-custom1">Employee</p>
                    <div className=" rounded-2xl rounded-tr-none h-full w-1/2 bg-white flex justify-center items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                        <p className=" text-3xl">What are the <br /> onboarding steps?</p>
                    </div>
                </div>

                <div className="w-full h-1/2 flex flex-col justify-center">
                    <p className=" font-bold font-custom1">EmpX</p>
                    <div className=" rounded-2xl rounded-tl-none h-5/6 w-1/2 bg-white flex justify-center items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                        <p className="pl-5 text-3xl">After the invoice has been processsed.
                            <br /> 1. Send invite to their team members. <br />2. Schedule group training.
                            <br /> 3. Create slack group for their personal customer support.</p>
                    </div>
                </div>

                <div className=" w-full h-1/6 flex flex-col items-end ">
                <p className=" font-bold font-custom1">Employee</p>
                    <div className=" rounded-2xl rounded-tr-none h-full w-1/2 bg-white flex justify-center items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                        <p className=" text-3xl">Where are the snack <br /> cabinet keys?</p>
                    </div>
                </div>

                <div className=" w-full h-1/6">
                <p className=" font-bold font-custom1">EmpX</p>
                    <div className=" rounded-2xl rounded-tl-none h-full w-1/2 bg-white flex justify-center items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                        <p className=" text-3xl">In the green cabinet <br /> in the break room</p>
                    </div>
                </div>

            </div>
        </div>
    )
}















