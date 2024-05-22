// import React from 'react'

// const Testimonies = () => {
//   return (
//     <div>
//         <div class="bg-neutral-950">
//   <section class="max-w-5xl mx-auto w-full px-10 py-10">
//     <div class="flex items-center justify-center flex-col gap-y-2 py-5">
//       <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-white">Here's what our
//         <span class="text-[#45B3BA]">customers</span> have to say
//       </h2>
//       <p class="text-lg font-medium text-slate-400/70">Discover how our service can benefit you</p>
//     </div>
//     <div class="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
//       <div
//         class="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
//         <div class="flex flex-col gap-y-3.5">
//           <p class="font-bold text-xl text-white">Efficient customer support</p>
//           <p class="font-medium text-white">The customer support team at our service is incredibly responsive and
//             helpful. They went above and beyond to assist me with my issue.</p>
//         </div>
//         <div class="flex flex-col"><img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Emily Smith" class="h-10 w-10" />
//           <p class="pt-2 text-sm font-semibold text-white">Emily Smith</p>
//           <p class="text-sm font-medium text-slate-100/70">Marketing Manager at ABC Company</p>
//         </div>
//       </div>
//       <div
//         class="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
//         <div class="flex flex-col gap-y-3.5">
//           <p class="font-bold text-xl text-white">Excellent product features</p>
//           <p class="font-medium text-white">The features offered by our service are outstanding. They have greatly
//             improved our workflow and efficiency.</p>
//         </div>
//         <div class="flex flex-col"><img src="https://randomuser.me/api/portraits/men/34.jpg" alt="Michael Johnson" class="h-10 w-10" />
//           <p class="pt-2 text-sm font-semibold text-white">Michael Johnson</p>
//           <p class="text-sm font-medium text-slate-100/70">CEO at XYZ Corporation</p>
//         </div>
//       </div>
//       <div
//         class="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
//         <div class="flex flex-col gap-y-3.5">
//           <p class="font-bold text-xl text-white">Seamless integration process</p>
//           <p class="font-medium text-white">Integrating our systems with our service was smooth and hassle-free. The
//             support team guided us through every step of the process.</p>
//         </div>
//         <div class="flex flex-col"><img src="https://randomuser.me/api/portraits/women/71.jpg" alt="Sarah Brown" class="h-10 w-10" />
//           <p class="pt-2 text-sm font-semibold text-white">Sarah Brown</p>
//           <p class="text-sm font-medium text-slate-100/70">CTO at XYZ Corporation</p>
//         </div>
//       </div>
//       <div
//         class="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
//         <div class="flex flex-col gap-y-3.5">
//           <p class="font-bold text-xl text-white">Reliable service uptime</p>
//           <p class="font-medium text-white">Our service has consistently maintained high uptime, ensuring that our
//             operations run smoothly without any disruptions.</p>
//         </div>
//         <div class="flex flex-col"><img src="https://randomuser.me/api/portraits/men/71.jpg" alt="James White" class="h-10 w-10" />
//           <p class="pt-2 text-sm font-semibold text-white">James White</p>
//           <p class="text-sm font-medium text-slate-100/70">COO at XYZ Corporation</p>
//         </div>
//       </div>
//     </div>
//   </section>
// </div>
//     </div>
//   )
// }

// export default Testimonies


import React from 'react'

const Testimonies = () => {
    return (
        <div><section id="testimonies" class="py-20 ">
            <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">


                <div class="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                    <div class="mb-12 space-y-5 md:mb-16 md:text-center">
                        <div
                            class="inline-block px-3 py-1 text-sm font-semibold text-gray rounded-lg md:text-center text-cn  bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                            Words from Others
                        </div>
                        <h1 class="mb-5 text-3xl font-semibold  md:text-center md:text-5xl">
                            It's not just us.
                        </h1>
                        <p class="text-xl  md:text-center md:text-2xl">
                            Here's what others have to say about us.
                        </p>
                    </div>
                </div>


                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">


                    <ul class="space-y-8">
                    <li class="text-sm leading-6">
    <div class="relative group">
        <div
            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
        </div>
        <a href="https://twitter.com/tim_cook" class="cursor-pointer">
            <div class="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                <div class="flex items-center space-x-4">
                    <img src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900">Tim Cook</h3>
                        <p class="text-gray-700 text-md">CEO of Apple</p>
                    </div>
                </div>
                <p class="leading-normal text-gray-700 text-md">Diam quis enim lobortis scelerisque fermentum dui faucibus
                    in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.</p>
            </div>
        </a>
    </div>
</li>
<li class="text-sm leading-6">
    <div class="relative group">
        <div
            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
        </div>
        <a href="https://twitter.com/tim_cook" class="cursor-pointer">
            <div class="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                <div class="flex items-center space-x-4">
                    <img src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900">Tim Cook</h3>
                        <p class="text-gray-700 text-md">CEO of Apple</p>
                    </div>
                </div>
                <p class="leading-normal text-gray-700 text-md">Diam quis enim lobortis scelerisque fermentum dui faucibus
                    in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.</p>
            </div>
        </a>
    </div>
</li>
<li class="text-sm leading-6">
    <div class="relative group">
        <div
            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
        </div>
        <a href="https://twitter.com/tim_cook" class="cursor-pointer">
            <div class="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                <div class="flex items-center space-x-4">
                    <img src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900">Tim Cook</h3>
                        <p class="text-gray-700 text-md">CEO of Apple</p>
                    </div>
                </div>
                <p class="leading-normal text-gray-700 text-md">Diam quis enim lobortis scelerisque fermentum dui faucibus
                    in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.</p>
            </div>
        </a>
    </div>
</li>

                    </ul>


                    <ul class="hidden space-y-8 sm:block">
                    <li class="text-sm leading-6">
    <div class="relative group">
        <div
            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
        </div>
        <a href="https://twitter.com/tim_cook" class="cursor-pointer">
            <div class="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                <div class="flex items-center space-x-4">
                    <img src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900">Tim Cook</h3>
                        <p class="text-gray-700 text-md">CEO of Apple</p>
                    </div>
                </div>
                <p class="leading-normal text-gray-700 text-md">Diam quis enim lobortis scelerisque fermentum dui faucibus
                    in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.</p>
            </div>
        </a>
    </div>
</li>
<li class="text-sm leading-6">
    <div class="relative group">
        <div
            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
        </div>
        <a href="https://twitter.com/tim_cook" class="cursor-pointer">
            <div class="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                <div class="flex items-center space-x-4">
                    <img src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900">Tim Cook</h3>
                        <p class="text-gray-700 text-md">CEO of Apple</p>
                    </div>
                </div>
                <p class="leading-normal text-gray-700 text-md">Diam quis enim lobortis scelerisque fermentum dui faucibus
                    in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.</p>
            </div>
        </a>
    </div>
</li>
<li class="text-sm leading-6">
    <div class="relative group">
        <div
            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
        </div>
        <a href="https://twitter.com/tim_cook" class="cursor-pointer">
            <div class="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                <div class="flex items-center space-x-4">
                    <img src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900">Tim Cook</h3>
                        <p class="text-gray-700 text-md">CEO of Apple</p>
                    </div>
                </div>
                <p class="leading-normal text-gray-700 text-md">Diam quis enim lobortis scelerisque fermentum dui faucibus
                    in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.</p>
            </div>
        </a>
    </div>
</li>

                    </ul>


                    <ul class="hidden space-y-8 lg:block">
                    <li class="text-sm leading-6">
    <div class="relative group">
        <div
            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
        </div>
        <a href="https://twitter.com/tim_cook" class="cursor-pointer">
            <div class="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                <div class="flex items-center space-x-4">
                    <img src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900">Tim Cook</h3>
                        <p class="text-gray-700 text-md">CEO of Apple</p>
                    </div>
                </div>
                <p class="leading-normal text-gray-700 text-md">Diam quis enim lobortis scelerisque fermentum dui faucibus
                    in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.</p>
            </div>
        </a>
    </div>
</li>
<li class="text-sm leading-6">
    <div class="relative group">
        <div
            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
        </div>
        <a href="https://twitter.com/tim_cook" class="cursor-pointer">
            <div class="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                <div class="flex items-center space-x-4">
                    <img src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900">Tim Cook</h3>
                        <p class="text-gray-700 text-md">CEO of Apple</p>
                    </div>
                </div>
                <p class="leading-normal text-gray-700 text-md">Diam quis enim lobortis scelerisque fermentum dui faucibus
                    in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.</p>
            </div>
        </a>
    </div>
</li>
<li class="text-sm leading-6">
    <div class="relative group">
        <div
            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
        </div>
        <a href="https://twitter.com/tim_cook" class="cursor-pointer">
            <div class="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                <div class="flex items-center space-x-4">
                    <img src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900">Tim Cook</h3>
                        <p class="text-gray-700 text-md">CEO of Apple</p>
                    </div>
                </div>
                <p class="leading-normal text-gray-700 text-md">Diam quis enim lobortis scelerisque fermentum dui faucibus
                    in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.</p>
            </div>
        </a>
    </div>
</li>

                    </ul>


                </div>
            </div>
        </section></div>
    )
}

export default Testimonies