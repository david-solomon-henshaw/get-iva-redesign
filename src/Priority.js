
import React from 'react'
import { Link } from 'react-router-dom'

const Priority = () => {
    return (
        <div>
            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="http://getiva.ai/_next/static/media/usersfirst.8175db45.png" class="mb-8 rounded-lg" alt="Tree" /><img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h2 class="text-3xl font-extrabold text-black dark:text-gray sm:text-4xl">
                            <span class="block">
                                Putting Our Users First                        </span>
                        </h2>
                        <p class="text-md mt-4 mb-8 text-gray-600">
                            Our users mean everything to us! <br/>Right from the beginning,
                            we've made it our<br /> top priority to protect and prioritize your needs. <br />
                            That's why we've implemented cutting-edge security measures <br />and
                            strict data privacy controls throughout the entire IVA ecosystem. <br />
                                                </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to="/waitlist-form" className="px-8 py-3 text-lg font-semibold rounded bg-indigo-600 text-gray-50">Try Iva</Link>
                            <Link to="/contact-us" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Contact-us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Priority