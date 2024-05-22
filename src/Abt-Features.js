import React from "react";

export default function Abt_Features() {
    return (
        <>
            <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
                <div className="lg:flex items-center justify-between">
                    <div className=" lg:w-1/2 w-full">
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">
                            Our Core Features                        </h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 text-gray-600">
                            IVA has a variety of features that make it the best place to manage your customer interactions                        </p>
                        <div className="w-56">
                        
                        </div>
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
                        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                            <div className="w-2.5  h-auto bg-indigo-700 rounded-tl-md rounded-bl-md" />
                            <div className="w-full p-8">
                                <div className="md:flex items-center justify-between">
                                    <h2 className="text-2xl font-semibold leading-6 text-gray-800">Unleash <br/> the Power of<br/>  Conversational AI</h2>
                                  
                                </div>
                                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Connect authentically with customers through natural, flowing conversations. Our virtual assistant understands their needs, providing contextually relevant responses that feel human.</p>
                            </div>
                        </div>
                        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                            <div className="w-2.5  h-auto bg-indigo-700 rounded-tl-md rounded-bl-md" />
                            <div className="w-full p-8">
                                <div className="md:flex items-center justify-between">
                                    <h2 className="text-2xl font-semibold leading-6 text-gray-800">Delegate <br/>100% Responsibility <br/>for Recurring Cases <br/> to IVA</h2>
                                    
                                </div>
                                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Unlimited products features and dedicated support channels</p>
                            </div>
                        </div>
                        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                            <div className="w-2.5  h-auto bg-indigo-700 rounded-tl-md rounded-bl-md" />
                            <div className="w-full p-8">
                                <div className="md:flex items-center justify-between">
                                    <h2 className="text-2xl font-semibold leading-6 text-gray-800">Scale Your Support Team Easily</h2>
                                    
                                </div>
                                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">With IVA, you can manage the speed of resolution, deploy additional agents as well customize their behaviour, language and more from easy to use interfaces. Now you can harness the power of AI Agents the right way, Start outsourcing your support cases with IVA today!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

