import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fruity-mongoose.vercel.app/api/v1/products')
            .then(res => res.json())
            .then(data =>
            {console.log(data)}
            );
    }, [])
    return (
        // <section className="py-20 bg-gray-50 font-poppins ">
        //     <div className="px-4 py-4 mx-auto max-w-7xl lg:py-6 md:px-6">
        //         <div className="flex flex-wrap mb-24 -mx-3">
        //             <div className="w-full pr-2 lg:w-1/4 lg:block">
        //                 <div className="p-4 mb-5 bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-00">
        //                     <h2 className="text-2xl font-bold dark:text-gray-400"> Categories</h2>
        //                     <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        //                     <ul>
        //                         <li className="mb-4">
        //                             <label for="" className="flex items-center dark:text-gray-400 ">
        //                                 <input type="checkbox" className="w-4 h-4 mr-2" />
        //                                 <span className="text-lg">Biscuits</span>
        //                             </label>
        //                         </li>
        //                         <li className="mb-4">
        //                             <label for="" className="flex items-center dark:text-gray-400 ">
        //                                 <input type="checkbox" className="w-4 h-4 mr-2 " />
        //                                 <span className="text-lg">Fruits</span>
        //                             </label>
        //                         </li>
        //                         <li className="mb-4">
        //                             <label for="" className="flex items-center dark:text-gray-400">
        //                                 <input type="checkbox" className="w-4 h-4 mr-2" />
        //                                 <span className="text-lg">Seafood</span>
        //                             </label>
        //                         </li>
        //                         <li className="mb-4">
        //                             <label for="" className="flex items-center dark:text-gray-400">
        //                                 <input type="checkbox" className="w-4 h-4 mr-2" />
        //                                 <span className="text-lg">Vegetables</span>
        //                             </label>
        //                         </li>
        //                         <li className="mb-4">
        //                             <label for="" className="flex items-center dark:text-gray-400">
        //                                 <input type="checkbox" className="w-4 h-4 mr-2" />
        //                                 <span className="text-lg">Frozen Foods &amp; Staples</span>
        //                             </label>
        //                         </li>
        //                     </ul>
        //                     <a href="/" className="text-base font-medium text-orange-500 hover:underline dark:text-orange-400">View
        //                         More</a>
        //                 </div>
        //                 <div className="p-4 mb-5 bg-white border border-gray-200 dark:bg-gray-00 dark:border-gray-900">
        //                     <h2 className="text-2xl font-bold dark:text-gray-400">Product Status</h2>
        //                     <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        //                     <ul>
        //                         <li className="mb-4">
        //                             <label for="" className="flex items-center dark:text-gray-300">
        //                                 <input type="checkbox" className="w-4 h-4 mr-2" />
        //                                 <span className="text-lg dark:text-gray-400">In Stock</span>
        //                             </label>
        //                         </li>
        //                         <li className="mb-4">
        //                             <label for="" className="flex items-center dark:text-gray-300">
        //                                 <input type="checkbox" className="w-4 h-4 mr-2" />
        //                                 <span className="text-lg dark:text-gray-400">On Sale</span>
        //                             </label>
        //                         </li>
        //                     </ul>
        //                 </div>
        //                 <div className="p-4 mb-5 bg-white border border-gray-200 dark:bg-gray-00 dark:border-gray-900">
        //                     <h2 className="text-2xl font-bold dark:text-gray-400">Brand</h2>
        //                     <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        //                     <ul>
        //                         <li className="mb-4">
        //                             <label for="" className="flex items-center dark:text-gray-300">
        //                                 <input type="checkbox" className="w-4 h-4 mr-2" />
        //                                 <span className="text-lg dark:text-gray-400">Apple</span>
        //                             </label>
        //                         </li>
        //                         <li className="mb-4">
        //                             <label for="" className="flex items-center dark:text-gray-300">
        //                                 <input type="checkbox" className="w-4 h-4 mr-2" />
        //                                 <span className="text-lg dark:text-gray-400">Oreo</span>
        //                             </label>
        //                         </li>
        //                         <li className="mb-4">
        //                             <label for="" className="flex items-center dark:text-gray-300">
        //                                 <input type="checkbox" className="w-4 h-4 mr-2" />
        //                                 <span className="text-lg dark:text-gray-400">Mango</span>
        //                             </label>
        //                         </li>
        //                         <li className="mb-4">
        //                             <label for="" className="flex items-center dark:text-gray-300">
        //                                 <input type="checkbox" className="w-4 h-4 mr-2" />
        //                                 <span className="text-lg dark:text-gray-400">Nebico</span>
        //                             </label>
        //                         </li>
        //                     </ul>
        //                     <a href="/" className="text-base font-medium text-orange-500 hover:underline dark:text-orange-400">View
        //                         More</a>
        //                 </div>
        //                 <div className="p-4 mb-5 bg-white border border-gray-200 dark:bg-gray-00 dark:border-gray-900">
        //                     <h2 className="text-2xl font-bold dark:text-gray-400">Price</h2>
        //                     <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        //                     <div className='w-full'>
        //                         <input type="range" className="w-full h-1 mb-4 bg-orange-100 rounded appearance-none cursor-pointer" max="100" step={1} />
        //                         <div className="flex justify-between ">
        //                             <span className="inline-block text-lg font-bold text-orange-400 ">$1</span>
        //                             <span className="inline-block text-lg font-bold text-orange-400 ">$500</span>
        //                         </div>
        //                     </div>

        //                     {/* <input type="range" name="" id="" className='appearance-none cursor-pointer h-1 w-full' /> */}
        //                 </div>
        //             </div>
        //             <div className="w-full px-3 lg:w-3/4">
        //                 <div className="px-3 mb-4">
        //                     <div className="items-center justify-between hidden px-3 py-2 bg-gray-100 md:flex dark:bg-gray-00 ">
        //                         <div className="flex">
        //                             <a href="/" className="inline-block h-full p-2 mr-3 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700">
        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 bi bi-list" viewBox="0 0 16 16">
        //                                     <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
        //                                 </svg>
        //                             </a>
        //                             <a href="/" className="inline-block h-full p-2 mr-3 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700">
        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 bi bi-grid-fill" viewBox="0 0 16 16">
        //                                     <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
        //                                 </svg>
        //                             </a>
        //                             <a href="/" className="inline-block h-full p-2 mr-3 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700">
        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
        //                                     <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"></path>
        //                                 </svg>
        //                             </a>
        //                         </div>
        //                         <div className="flex items-center justify-between">
        //                             <div className="pr-3 border-r border-gray-300">
        //                                 <select name="" id="" className="block w-40 text-base bg-gray-100 cursor-pointer dark:text-gray-400 dark:bg-gray-00">
        //                                     <option value="">Sort by latest</option>
        //                                     <option value="">Sort by Popularity</option>
        //                                     <option value="">Sort by Price</option>
        //                                 </select>
        //                             </div>
        //                             <div className="flex items-center pl-3">
        //                                 <p className="text-xs text-gray-400">Show</p>
        //                                 <div className="px-2 py-2 text-xs text-gray-500 ">
        //                                     <select name="" id="" className="block text-base bg-gray-100 cursor-pointer w-11 dark:text-gray-400 dark:bg-gray-00">
        //                                         <option value="">15</option>
        //                                         <option value="">17</option>
        //                                         <option value="">19</option>
        //                                     </select>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-wrap items-center ">
        //                     <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
        //                         <div className="border border-gray-300 dark:border-gray-700">
        //                             <div className="relative bg-gray-200">
        //                                 <a href="/" className="">
        //                                     <img src="https://i.postimg.cc/hj6h6Vwv/pexels-artem-beliaikin-2292919.jpg" alt="" className="object-cover w-full h-56 mx-auto " />
        //                                 </a>
        //                             </div>
        //                             <div className="p-3 ">
        //                                 <div className="flex items-center justify-between gap-2 mb-2">
        //                                     <h3 className="text-xl font-medium dark:text-gray-400">
        //                                         Product name
        //                                     </h3>
        //                                     <ul className="flex">
        //                                         <li>
        //                                             <a href=" #">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href=" #">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href=" #">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href=" #">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                     </ul>
        //                                 </div>
        //                                 <p className="text-lg ">
        //                                     <span className="text-green-600 dark:text-green-600">$800.00</span>
        //                                 </p>
        //                             </div>
        //                             <div className="flex justify-between p-4 border-t border-gray-300 dark:border-gray-700">
        //                                 <a href=" #" className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
        //                                         <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
        //                                     </svg>
        //                                 </a>
        //                                 <a href=" #" className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 bi bi-cart3 " viewBox="0 0 16 16">
        //                                         <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        //                                     </svg>
        //                                 </a>
        //                                 <a href=" #" className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
        //                                         <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
        //                                         <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
        //                                     </svg>
        //                                 </a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
        //                         <div className="border border-gray-300 dark:border-gray-700">
        //                             <div className="relative bg-gray-200">
        //                                 <a href=" #" className="">
        //                                     <img src="https://i.postimg.cc/pdcRLwSq/pexels-igor-ovsyannykov-205961.jpg" alt="" className="object-cover w-full h-56 mx-auto " />
        //                                 </a>
        //                             </div>
        //                             <div className="p-3 ">
        //                                 <div className="flex items-center justify-between mb-2">
        //                                     <h3 className="text-xl font-medium dark:text-gray-400">
        //                                         Product name
        //                                     </h3>
        //                                     <ul className="flex">
        //                                         <li>
        //                                             <a href=" #">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href="# ">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href=" #">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href="# ">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                     </ul>
        //                                 </div>
        //                                 <p className="text-lg ">
        //                                     <span className="text-green-600 dark:text-green-600">$800.00</span>
        //                                 </p>
        //                             </div>
        //                             <div className="flex justify-between p-4 border-t border-gray-300 dark:border-gray-700">
        //                                 <a href="# " className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
        //                                         <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
        //                                     </svg>
        //                                 </a>
        //                                 <a href="# " className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 bi bi-cart3 " viewBox="0 0 16 16">
        //                                         <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        //                                     </svg>
        //                                 </a>
        //                                 <a href="# " className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
        //                                         <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
        //                                         <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
        //                                     </svg>
        //                                 </a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
        //                         <div className="border border-gray-300 dark:border-gray-700">
        //                             <div className="relative bg-gray-200">
        //                                 <a href="# " className="">
        //                                     <img src="https://i.postimg.cc/x1dZ1XSV/pexels-k-bra-do-u-10154821.jpg" alt="" className="object-cover w-full h-56 mx-auto " />
        //                                 </a>
        //                             </div>
        //                             <div className="p-3 ">
        //                                 <div className="flex items-center justify-between mb-2">
        //                                     <h3 className="text-xl font-medium dark:text-gray-400">
        //                                         Product name
        //                                     </h3>
        //                                     <ul className="flex">
        //                                         <li>
        //                                             <a href=" #">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href="# ">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href="# ">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href="# ">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                     </ul>
        //                                 </div>
        //                                 <p className="text-lg ">
        //                                     <span className="text-green-600 dark:text-green-600">$800.00</span>
        //                                 </p>
        //                             </div>
        //                             <div className="flex justify-between p-4 border-t border-gray-300 dark:border-gray-700">
        //                                 <a href="# " className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
        //                                         <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
        //                                     </svg>
        //                                 </a>
        //                                 <a href="# " className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 bi bi-cart3 " viewBox="0 0 16 16">
        //                                         <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        //                                     </svg>
        //                                 </a>
        //                                 <a href="# " className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
        //                                         <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
        //                                         <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
        //                                     </svg>
        //                                 </a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
        //                         <div className="border border-gray-300 dark:border-gray-700">
        //                             <div className="relative bg-gray-200">
        //                                 <a href="# " className="">
        //                                     <img src="https://i.postimg.cc/Vk57c2jY/pexels-meruyert-gonullu-6152391.jpg" alt="" className="object-cover w-full h-56 mx-auto " />
        //                                 </a>
        //                             </div>
        //                             <div className="p-3 ">
        //                                 <div className="flex items-center justify-between mb-2">
        //                                     <h3 className="text-xl font-medium dark:text-gray-400">
        //                                         Product name
        //                                     </h3>
        //                                     <ul className="flex">
        //                                         <li>
        //                                             <a href=" #">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href="# ">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href="# ">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href="# ">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                     </ul>
        //                                 </div>
        //                                 <p className="text-lg ">
        //                                     <span className="text-green-600 dark:text-green-600">$800.00</span>
        //                                 </p>
        //                             </div>
        //                             <div className="flex justify-between p-4 border-t border-gray-300 dark:border-gray-700">
        //                                 <a href="# " className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
        //                                         <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
        //                                     </svg>
        //                                 </a>
        //                                 <a href="# " className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 bi bi-cart3 " viewBox="0 0 16 16">
        //                                         <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        //                                     </svg>
        //                                 </a>
        //                                 <a href="# " className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
        //                                         <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
        //                                         <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
        //                                     </svg>
        //                                 </a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
        //                         <div className="border border-gray-300 dark:border-gray-700">
        //                             <div className="relative bg-gray-200">
        //                                 <a href="# " className="">
        //                                     <img src="https://i.postimg.cc/Dfg5476v/pexels-michael-burrows-7129126.jpg" alt="" className="object-cover w-full h-56 mx-auto " />
        //                                 </a>
        //                             </div>
        //                             <div className="p-3 ">
        //                                 <div className="flex items-center justify-between mb-2">
        //                                     <h3 className="text-xl font-medium dark:text-gray-400">
        //                                         Product name
        //                                     </h3>
        //                                     <ul className="flex">
        //                                         <li>
        //                                             <a href=" #">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href="# ">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href="# ">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href="# ">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                     </ul>
        //                                 </div>
        //                                 <p className="text-lg ">
        //                                     <span className="text-green-600 dark:text-green-600">$800.00</span>
        //                                 </p>
        //                             </div>
        //                             <div className="flex justify-between p-4 border-t border-gray-300 dark:border-gray-700">
        //                                 <a href="# " className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
        //                                         <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
        //                                     </svg>
        //                                 </a>
        //                                 <a href="# " className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 bi bi-cart3 " viewBox="0 0 16 16">
        //                                         <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        //                                     </svg>
        //                                 </a>
        //                                 <a href="# " className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
        //                                         <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
        //                                         <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
        //                                     </svg>
        //                                 </a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
        //                         <div className="border border-gray-300 dark:border-gray-700">
        //                             <div className="relative bg-gray-200">
        //                                 <a href="# " className="">
        //                                     <img src="https://i.postimg.cc/MKH0cVX5/pexels-pixabay-264636.jpg" alt="" className="object-cover w-full h-56 mx-auto " />
        //                                 </a>
        //                             </div>
        //                             <div className="p-3 ">
        //                                 <div className="flex items-center justify-between mb-2">
        //                                     <h3 className="text-xl font-medium dark:text-gray-400">
        //                                         Product name
        //                                     </h3>
        //                                     <ul className="flex">
        //                                         <li>
        //                                             <a href=" #">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href="# ">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href="# ">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                         <li>
        //                                             <a href="# ">
        //                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
        //                                                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
        //                                                 </svg>
        //                                             </a>
        //                                         </li>
        //                                     </ul>
        //                                 </div>
        //                                 <p className="text-lg ">
        //                                     <span className="text-green-600 dark:text-green-600">$800.00</span>
        //                                 </p>
        //                             </div>
        //                             <div className="flex justify-between p-4 border-t border-gray-300 dark:border-gray-700">
        //                                 <a href="# " className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
        //                                         <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
        //                                     </svg>
        //                                 </a>
        //                                 <a href="# " className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 bi bi-cart3 " viewBox="0 0 16 16">
        //                                         <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        //                                     </svg>
        //                                 </a>
        //                                 <a href="# " className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
        //                                         <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
        //                                         <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
        //                                     </svg>
        //                                 </a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex justify-end mt-6">
        //                     <nav aria-label="page-navigation">
        //                         <ul className="flex list-style-none">
        //                             <li className="page-item disabled ">
        //                                 <a href="# " className="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md dark:text-gray-400 hover:text-gray-100 hover:bg-orange-600">Previous
        //                                 </a>
        //                             </li>
        //                             <li className="page-item ">
        //                                 <a href="# " className="relative block px-3 py-1.5 mr-3 text-base hover:text-orange-700 transition-all duration-300 hover:bg-orange-200 dark:hover:text-gray-400 dark:hover:bg-gray-700 rounded-md text-gray-100 bg-orange-400">1
        //                                 </a>
        //                             </li>
        //                             <li className="page-item ">
        //                                 <a href="# " className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-orange-100 rounded-md mr-3  ">2
        //                                 </a>
        //                             </li>
        //                             <li className="page-item ">
        //                                 <a href="# " className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-orange-100 rounded-md mr-3 ">3
        //                                 </a>
        //                             </li>
        //                             <li className="page-item ">
        //                                 <a href="# " className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-orange-100 rounded-md ">Next
        //                                 </a>
        //                             </li>
        //                         </ul>
        //                     </nav>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <div>

            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Our Products</h2>

                <form className="max-w-sm mx-auto">
                    <label for="sort" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select id="sort" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Deafult sort</option>
                        <option value="US">Sort by Popularity</option>
                        <option value="CA">Sort by new Arrivals</option>
                        <option value="FR">Sort by low price</option>
                        <option value="DE">Sort by high price</option>
                    </select>
                </form>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product._id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60 items-center flex">
                                <img
                                    src={product.img}
                                    alt={product.imageAlt}
                                    className=""
                                // className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    {/* <p className="mt-1 text-sm text-gray-500">{product.star}</p> */}
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price} TK</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;