import React from 'react';
import svg1 from '../../../Assets/icons/10.png';
import svg2 from '../../../Assets/icons/11.png';
import svg3 from '../../../Assets/icons/12.png';
import svg4 from '../../../Assets/icons/svg/11.png';
import svg5 from '../../../Assets/icons/svg/12.png';
import svg6 from '../../../Assets/icons/svg/13.png';
import svg7 from '../../../Assets/icons/svg/14.png';
import { FaPhoneVolume } from "react-icons/fa6";


const Contact = () => {
    return (
        <section>
            <div className='w-full h-full pt pt-60 pb-28' style={{ backgroundColor: '#1E3133' }}>
                <span className='mx-48 text-green-500 font-bold'>// Welcome To Our Company</span>
                <h1 className='mx-48 text-6xl font-bold text-white'>Contact Us</h1>
            </div>
            <div className='flex justify-center'>
                <div className='border bottom-2 m-5 p-5 text text-center'>
                    <img className='mx-auto' src={svg1} alt="" />
                    <h1>Email Address</h1>
                    <p>info@webmail.com</p>
                    <p>jobs@webexample.com</p>
                </div>
                <div className='border bottom-2 m-5 p-5 text-center'>
                    <img className='mx-auto' src={svg2} alt="" />
                    <h1>Email Address</h1>
                    <p>info@webmail.com</p>
                    <p>jobs@webexample.com</p>
                </div>
                <div className='border bottom-2 m-5 p-5 text-center'>
                    <img className='mx-auto' src={svg3} alt="" />
                    <h1>Email Address</h1>
                    <p>info@webmail.com</p>
                    <p>jobs@webexample.com</p>
                </div>

            </div>
            <section class="bg-white my-10">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md border">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold  text-gray-900 ">Get A Quote</h2>

                    <form action="#" class="space-y-8 ">
                        <div className='grid grid-cols-6 gap-6'>
                            <div className='col-span-6 sm:col-span-3'>
                            <div>
                            <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-orange-500">Username</label>
                            <div class="flex">
                                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-orange-400 dark:text-gray-400 dark:border-gray-600">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                    </svg>
                                </span>
                                <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green" />
                            </div>
                            </div>
                            </div>

                            <div className='col-span-6 sm:col-span-3'>
                            <div>
                            <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-orange-500">Email</label>
                            <div class="flex">
                                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-orange-400 dark:text-gray-400 dark:border-gray-600">
                                <svg class="w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                    </svg>
                                </span>
                                <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gamil.com"/>
                            </div>
                            </div>
                            </div>
                            
                            <div className='col-span-6 sm:col-span-3'>
                        <div>
                            <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-orange-500">Phone</label>
                            <div class="flex">
                                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-orange-400 dark:text-gray-400 dark:border-gray-600">
                                    <FaPhoneVolume className='w-4 h-4 text-gray-500 dark:text-white' />
                                </span>
                                <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="01234567890" />
                            </div>
                        </div>
                            </div>

                            <div className='col-span-6 sm:col-span-3'>                    
                        <div>
                            <label for="countries" class="block mb-2 text-sm font-medium dark:text-orange-500">Select your country</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                {/* <option>Select your country</option> */}
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>
                        </div>
                            </div>

                            <div class="col-span-6 sm:col-span-6">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-orange-500">Your message</label>
                            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                        </div>
                        <div class="flex items-center mb-4">
                        <input checked id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900">Save my name, email, and website in this browser for the next time I comment.</label>
                        </div>
                        <button type="submit" class="py-3 px-5 mx-auto text-sm font-medium text-center text-black rounded-lg bg-orange-300 bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </form>
                </div>
            </section>
            <div className='my-10'>
            <iframe className='w-full mx-auto' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20116.762357101947!2d90.38048636744239!3d23.87876484647813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2z4KaJ4Kak4KeN4Kak4Kaw4Ka-LCDgpqLgpr7gppXgpr4!5e0!3m2!1sbn!2sbd!4v1705644359090!5m2!1sbn!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='flex justify-center items-center m-20 gap-5'>
                <div className='flex items-center gap-2 borde border-e-2 p-3'>
                    <img src={svg4} alt="" />
                    <div>
                    <h1 className="fon font-bold">Curated Products</h1>
                    <p>Provide Curated Products for all product over $100</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 borde border-e-2 p-3'>
                    <img src={svg5} alt="" />
                    <div>
                    <h1 className="fon font-bold">Handmade</h1>
                    <p>We ensure the product quality that is our main goal</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 borde border-e-2 p-3'>
                    <img src={svg6} alt="" />
                    <div>
                    <h1 className="fon font-bold">Natural Food</h1>
                    <p>Return product within 3 days for any product you buy</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 p-3'>
                    <img src={svg7} alt="" />
                    <div>
                    <h1 className="fon font-bold">Free home delivery</h1>
                    <p>We ensure the product quality that you can trust easily</p>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Contact;