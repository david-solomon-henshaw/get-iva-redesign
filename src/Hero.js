// import React from 'react'

// const Hero = () => {
//   return (
//     <div>
//       <div className="relative isolate px-6 pt-14 lg:px-8">
//         <div
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//           />
//         </div>
//         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//               Slash support costs by 97%            </h1>
//             <p className="mt-6 text-lg leading-8 text-gray-600">
//               Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//               fugiat veniam occaecat fugiat aliqua.
//             </p>
            
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <a
//                 href="#"
//                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Try Iva Now
//               </a>
//               <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//                 Join Waitlist <span aria-hidden="true">→</span>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero

import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='py-20'>
      <section>
        <div className="bg-indigo-600 py-20">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">Slash support costs by 97%</h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">Access unlimited, always available and personalized Intelligent Virtual Agents
Embrace the future, Start deploying IVA Today</p>
            <div className="flex flex-wrap justify-center">
            <Link to="/contact-us"> <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900">Try Iva</button></Link>
            <Link to="/waitlist-form"> <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-300 text-gray-50">Join Waitlist</button></Link>
            </div>
          </div>
        </div>
        <video className="w-5/6 mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40 " autoPlay muted loop>
          <source src="https://getiva.ai/_next/static/videos/iva_demo_web-71bdf305736f88ff128f13653c42ad1f.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
};

export default Hero;
