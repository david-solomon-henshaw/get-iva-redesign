import React from "react";
import Abt_Features from "./Abt-Features";
import Priority from "./Priority";
import Team from "./Team";

const About = () => {
    return (
        < div className="py-20">
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="lg:w-10/12 w-full">
                    <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">About</p>
                    <h2 className="xl:w-8/12 lg:w-10/12  w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">We Revolutionizing the Customer Service Game</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">IVA is an advanced AI-powered virtual assistant designed to handle customer inquiries seamlessly. With cutting-edge natural language processing, it provides human-like responses, ensuring exceptional customer experience. IVA takes the load off your support team by performing necessary actions that your customer support agents would do on a daily basis while managing cases hereby actually solving the support tickets as opposse to other solutions currently in the market. </p>
                </div>

                <div className="lg:mt-14 sm:mt-10 mt-12">
                    <img className="lg:block hidden w-full" src="https://irp.cdn-website.com/0930f0fc/dms3rep/multi/Ai+Virtual+Assistants.png" alt="Group of people Chilling" />
                    <img className="lg:hidden sm:block hidden w-full" src="https://irp.cdn-website.com/0930f0fc/dms3rep/multi/Ai+Virtual+Assistants.png" alt="Group of people Chilling" />
                    <img className="sm:hidden block w-full" src="https://irp.cdn-website.com/0930f0fc/dms3rep/multi/Ai+Virtual+Assistants.png" alt="Group of people Chilling" />
                </div>

                <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                    <div className="w-full xl:w-5/12 lg:w-6/12">
                        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Mission</h2>
                        <p className="font-normal text-base leading-6 text-gray-600 mt-4">Our mission is to revolutionize customer service by harnessing the power of AI innovation. We believe that exceptional customer experiences are the cornerstone of business success, and we are committed to providing cutting-edge solutions that elevate customer service to new heights.</p>
                    </div>
                    <div className="lg:flex items-center w-full lg:w-1/2 ">
                        <img className="lg:block hidden w-full" src="https://botup.com/images/ai-chatbot-screenshot-1.png?v=1691124479409199525" alt="people discussing on board" />
                        <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://botup.com/images/ai-chatbot-screenshot-1.png?v=1691124479409199525" alt="people discussing on board" />
                        <img className="sm:hidden block w-full" src="https://botup.com/images/ai-chatbot-screenshot-1.png?v=1691124479409199525" alt="people discussing on board" />
                    </div>
                </div>
            </div>
            <Abt_Features />
            <Priority />
            <Team />
        </div>
    );
};

export default About;
