import React, { useState } from 'react';
import logo from '../../../Assets/logo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="shadow-lg font-poppins dar:bg-gray-800">
      <div className="max-w-6xl px-4 mx-auto" data-open={open}>
        <div className="relative flex items-center justify-between py-4">
          <a href="/" className="text-3xl font-semibold leading-none dark:text-gray-400">
            <img className='w w-40' src={logo} alt="" />
          </a>

          <div className="lg:hidden">
            <button
              className="flex items-center px-3 py-2 text-orange-600 border border-orange-200 rounded dark:text-gray-400 navbar-burger hover:text-orange-800 hover:border-orange-300 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
          </div>

          <ul className="hidden lg:w-auto lg:space-x-12 lg:items-center lg:flex">
            <li><a href="/" className="text-sm text-gray-700 hover:text-orange-700 dark:text-gray-400 dark:hover:text-orange-500">Home</a></li>
            <li><a href="/about" className="text-sm text-gray-700 hover:text-orange-700 dark:text-gray-400 dark:hover:text-orange-500">About us</a></li>
            <li><a href="/products" className="text-sm text-gray-700 hover:text-orange-700 dark:text-gray-400 dark:hover:text-orange-500">Shop</a></li>
            <li><a href="/blogs" className="text-sm text-gray-700 hover:text-orange-700 dark:text-gray-400 dark:hover:text-orange-500">Blog </a></li>
            <li><a href="/contact" className="text-sm text-gray-700 hover:text-orange-700 dark:text-gray-400 dark:hover:text-orange-500">Testimonials</a></li>
          </ul>

          <div className="hidden lg:block">
            <a href="/signIn" className="inline-block px-4 py-3 mr-2 text-xs font-semibold leading-none text-orange-600 border border-orange-200 rounded dark:hover:border-orange-300 dark:hover:text-orange-300 dark:text-gray-400 hover:text-orange-700 hover:border-orange-300">Log In</a>
            <a href="/signOut" className="inline-block px-4 py-3 mr-2 text-xs font-semibold leading-none text-gray-100 bg-orange-600 border border-orange-200 rounded dark:hover:border-orange-400 dark:hover:bg-orange-400 dark:bg-orange-300 dark:text-gray-700 hover:bg-orange-700">Sign Up</a>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 w-full bg-gray-900 opacity-25 dark:bg-gray-400 lg:hidden ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'}`}></div>

        <div className={`absolute inset-0 z-10 h-screen p-3 text-gray-400 duration-500 transform bg-orange-50 dark:bg-gray-800 w-80 lg:hidden lg:transform-none lg:relative ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'}`}>
          <div className="flex justify-between lg:">
            <a className="p-2 text-2xl font-bold text-gray-700 dark:text-gray-400" href="/">Logo</a>
            <button className="p-2 text-gray-700 rounded-md dark:text-gray-400 hover:text-orange-300 lg:hidden" onClick={() => setOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <ul className="px-4 text-left mt-7">
            <li className="pb-3"><a href="/" className="text-sm text-gray-700 hover:text-orange-400 dark:text-gray-100">Home</a></li>
            <li className="pb-3"><a href="/about" className="text-sm text-gray-700 hover:text-orange-400 dark:text-gray-400">About us</a></li>
            <li className="pb-3"><a href="/products" className="text-sm text-gray-700 hover:text-orange-400 dark:text-gray-400">Features</a></li>
            <li className="pb-3"><a href="/blogs" className="text-sm text-gray-700 hover:text-orange-400 dark:text-gray-400">Blog </a></li>
            <li className="pb-3"><a href="/contact" className="text-sm text-gray-700 hover:text-orange-400 dark:text-gray-400">Testimonials</a></li>
          </ul>
          <div className="block mt-5 lg:hidden">
            <a href="#/signIn" className="inline-block w-full px-4 py-3 mb-4 mr-2 text-xs font-semibold leading-none text-center text-orange-600 border border-orange-400 rounded dark:hover:text-orange-300 dark:text-gray-400 dark:border-gray-400 hover:text-orange-700 hover:border-orange-300">Log In</a>
            <a href="/signOut" className="inline-block w-full px-4 py-3 mr-2 text-xs font-semibold leading-none text-center text-gray-100 bg-orange-600 rounded dark:hover:bg-orange-400 dark:bg-orange-300 dark:text-gray-700 hover:bg-orange-700">Sign Up</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
