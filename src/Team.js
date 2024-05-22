import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
    return (
        <div>
            <div class="py-20 bg-gray-50">
                <div class="container mx-auto px-6 md:px-12 xl:px-32">
                    <div class="mb-16 text-center">
                        <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">GetIva Team</h2>
                    </div>
                    <div class="grid gap-12 items-center md:grid-cols-3">
                        <div class="space-y-4 text-center">
                            <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                                src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="woman" loading="lazy" width="640" height="805" />
                            <div>
                                <h4 class="text-2xl">Valdis Sprogis</h4>
                                <span class="block text-sm text-gray-500">CEO-Founder</span>
                            </div>
                        </div>
                        <div class="space-y-4 text-center">
                            <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                                src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg" alt="man" loading="lazy" width="1000" height="667" />
                            <div>
                                <h4 class="text-2xl">Zino Adidi</h4>
                                <span class="block text-sm text-gray-500">Co-Founder, CTO</span>
                            </div>
                        </div>
                        <div class="space-y-4 text-center">
                            <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                                src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg" alt="woman" loading="lazy" width="1000" height="667" />
                            <div>
                                <h4 class="text-2xl">Joy Essin</h4>
                                <span class="block text-sm text-gray-500">UI / UX Expert</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white dark:bg-white-800 ">
                <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 class="text-3xl font-extrabold text-black dark:text-gray sm:text-4xl">
                        <span class="block">
                        Still have questions?                        </span>
                        
                    </h2>
                    <p class="text-xl mt-4 max-w-md mx-auto text-gray-700">
                    Can’t find the answer you’re looking for? Please chat to our friendly team.
                    </p>
                    <div class="lg:mt-0 lg:flex-shrink-0">
                        <div class="mt-12 inline-flex rounded-md shadow">
                            <Link to="/contact-us">
                            <button type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Get in touch
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Team