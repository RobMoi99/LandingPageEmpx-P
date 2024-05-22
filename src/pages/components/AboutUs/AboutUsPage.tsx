export default function AboutUsPage() {
    return (
        <div>

            <div className=" flex flex-col justify-center ">

                <div className="flex justify-center lg:pt-44 ">
                    <h1 className=" w-1/2 text-8xl utlg:text-3xl utlg:font-bold  utlg:w-full utlg:p-10 font-custom1 ">How we achieve employee excellence with EmpX.</h1>
                </div>
                <div className="flex  flex-col items-end justify-end ut2xl:justify-center lg:pr-60 pt-10">


                    <p className="text-2xl font-custom1 text-start utlg:w-full  utlg:p-10 w-1/2">
                        {/* the 'tool'? they need to excel */}
                        At Empx, we understand the challenges that can arise in a dynamic work environment.
                        Whether it's a complex customer inquiry or the need for providing guidance on resolving
                        technical issues, we're here to empower your employees with the tools they need to excel.
                        Our AI-powered chatbot is designed to be your employees trusted companion. With us by their side,
                        your team can navigate any situation with confidence and efficiency. We're more than just a tool,
                        we're a personalized assistant that grows alongside your organization.

                    </p>
                    <h1 className="  text-5xl font-custom1  mt-28 mb-3 utlg:w-full utlg:p-10 w-1/2">Here's how it works</h1>
                    <p className="text-2xl pt-3 font-custom1 text-start utlg:w-full  utlg:p-10 w-1/2">

                        We manually configure Empx with essential company information, drawing from existing sources such as your website or pre-existing binders containing instructions and information, ensuring it's ready to provide meaningful assistance from day one. As your team interacts with Empx, it continuously learns and adapts, becoming increasingly knowledgeable about your company's unique processes and preferences.
                        Our ultimate goal is to make Empx an indispensable part of your team—an ally that empowers your employees to perform at their best. With Expex, you're not just investing in software, you're investing in the success and satisfaction of your workforce.
                        Join us on the journey to employee excellence.

                    </p>




                </div>
            </div>

            {/*  ugly fix*/}
            <div className="h-[250px]"></div>
        </div>

    )
}