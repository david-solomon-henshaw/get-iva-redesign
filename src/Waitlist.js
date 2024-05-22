// import React from 'react'

// const Waitlist = () => {
//   return (
//     <div classNameName='py-20'>
//         <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//   <h2 className="text-2xl font-bold mb-6 text-gray-900">Join Our Waitlist</h2>
//   <form className="grid grid-cols-1 gap-6">
//     <div>
//       <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
//       <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required //>
//     </div>
//     <div>
//       <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
//       <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required //>
//     </div>
//     <div>
//       <label for="company" className="block text-sm font-medium text-gray-700">Company Name</label>
//       <input type="text" id="company" name="company" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
//     </div>
//     <div>
//       <label for="additional-info" className="block text-sm font-medium text-gray-700">Additional Info</label>
//       <textarea id="additional-info" name="additional-info" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
//     </div>
//     <div>
//       <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
//     </div>
//   </form>
// </div>

//     </div>
//   )
// }

// export default Waitlist


import React from 'react'

const Waitlist = () => {
  return (
    <div className='py-20'>
      <div class="bg-gradient-to-r from-blue-300 to-purple-500 h-screen flex justify-center items-center">
        <div class="py-8 px-6 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter w-full">
          <h1 class="text-3xl font-extrabold text-center text-gray-800 mb-5">Waitlist Form</h1>
          <p class="text-lg text-center text-gray-700 mb-8">Join our waitlist to stay updated</p>
          <form class="flex flex-col" action="https://fabform.io/f/{form-id}" method="post">
            <div class="mb-5">
              <label class="text-gray-700 font-semibold mb-2" for="name">Name</label>
              <input class="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" type="text" id="name" name="name" required />
            </div>
            <div class="mb-5">
              <label class="text-gray-700 font-semibold mb-2" for="email">Email</label>
              <input class="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" type="email" id="email" name="email" required />
            </div>
            <div class="mb-5">
              <label class="text-gray-700 font-semibold mb-2" for="company">Company Name</label>
              <input class="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" type="text" id="company" name="company" required />
            </div>
            <div class="mb-5">
              <label class="text-gray-700 font-semibold mb-2" for="info">Additional Info</label>
              <textarea class="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" id="info" name="info" rows="5" required ></textarea>
            </div>
            <button class="bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-5" type="submit">Join Waitlist</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Waitlist