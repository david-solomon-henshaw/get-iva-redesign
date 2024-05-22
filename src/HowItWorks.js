// import React from 'react'

// const HowItWorks = () => {
//   return (
//     <div>

// <section id="works" class="relative bg-gray-900 py-10 sm:py-16 lg:py-24">
//     <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div class="max-w-2xl mx-auto text-center">
//             <h2 class="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">How does it work?</h2>
//             <p class="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
//                 Our AI solution will help you from start to finish
//             </p>
//         </div>
//         <div class="relative mt-12 lg:mt-20">
//             <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28"><img alt="" loading="lazy" width="1000" height="500" decoding="async" data-nimg="1" class="w-full" style={{color:"transparent"}} src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" />
//             </div>
//             <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
//                 <div>
//                     <div
//                         class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
//                         <span class="text-xl font-semibold text-gray-700">1</span>
//                     </div>
//                     <h3 class="mt-6 text-xl  text-white font-semibold leading-tight md:mt-10">Select template</h3>
//                     <p class="mt-4 text-base text-gray-400 md:text-lg">
//                         Select template accourding to your requirement
//                     </p>
//                 </div>
//                 <div>
//                     <div
//                         class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
//                         <span class="text-xl font-semibold text-gray-700">2</span>
//                     </div>
//                     <h3 class="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Enter Your Details</h3>
//                     <p class="mt-4 text-base text-gray-400 md:text-lg">
//                         Put in your personalized details and let the AI do the rest.
//                     </p>
//                 </div>
//                 <div>
//                     <div
//                         class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
//                         <span class="text-xl font-semibold text-gray-700">3</span>
//                     </div>
//                     <h3 class="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Publish it</h3>
//                     <p class="mt-4 text-base text-gray-400 md:text-lg">
//                         Use output as you like
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     {/* <div class="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" */}
//         style={{background: "radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)" }}>
//     </div>
// </section>

//     </div>
//   )
// }

// export default HowItWorks




const HowItWorks = () => (
    <div classname="overflow-y-hidden bg-gray-100">
      <div className="mx-auto container f-f-p px-4 xl:px-0 py-24">
        <h1 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-gray-900">How it works?</h1>
        <div className="md:mt-24 f-f-p">
          <div className="hidden md:flex justify-center w-full">
            <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
              <div aria-label="sign up" role="img">
                <img className="focus:outline-none mt-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg" alt="how it work" />
              </div>
              <div aria-label={2} role="img">
                <img className="focus:outline-none mt-24" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg" alt />
              </div>
              <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
                <h1 className="focus:outline-none text-xl font-bold leading-5">Customize Agent</h1>
                <h2 className="focus:outline-none text-gray-500 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">Tailor the virtual agent to match your brand's voice and style. </h2>
              </div>
              <div aria-label="transactions" role="img">
                <img className="focus:outline-none mt-24" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg" alt />
              </div>
              <img className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1" src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png" alt />
            </div>
            <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
              <div aria-label={1} role="img">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg" alt />
              </div>
              <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                <h1 className="focus:outline-none text-xl font-bold leading-5">Upload Data</h1>
                <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">Upload your customer support data and knowledge base to our platform. </h2>
              </div>
              <div aria-label="wallet" role="img">
                <img className="focus:outline-none mt-32" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg" alt />
              </div>
              <div aria-label={3} role="img">
                <img className="focus:outline-none mt-20" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg" alt />
              </div>
              <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                <h1 className="focus:outline-none text-xl font-bold leading-5">Support Customers</h1>
                <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">Deploy IVA across your channels and start supporting your customers.</h2>
              </div>
            </div>
          </div>
          <div className="md:hidden flex flex-col items-center w-full">
            <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg" alt="how it work" />
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg" alt />
            <div className="mt-10">
              <h1 className="text-xl text-center tracking-wide leading-5 font-bold">Upload Data</h1>
              <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Upload your customer support data and knowledge base to our platform.</h2>
            </div>
            <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg" alt />
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg" alt />
            <div className="mt-10">
              <h1 className="text-xl tracking-wide text-center leading-5 font-bold">Customize Agent</h1>
              <h2 className="text-gray-500 mt-3 pl-3 text-center text-base leading-6 tracking-wide">Tailor the virtual agent to match your brand's voice and style.</h2>
            </div>
            <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg" alt />
            <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg" alt />
            <div className="flex mt-10 flex-col items-center md:items-start md:w-8/12">
              <h1 className="text-xl text-center tracking-wide leading-5 font-bold">Support Customers</h1>
              <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Deploy IVA across your channels and start supporting your customers.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
  
  
  
  
  
  
  );
  export default HowItWorks;
  
  
  
  
  