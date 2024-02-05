import React from 'react';
import ab from '../../../Assets/ab.png'
import faq from '../../../Assets/fruits.png'

import Accordion from '../Accordian.jsx';

const About = () => {

    const accordionItems = [
        { title: 'How to buy a product?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac.' },
        { title: 'How can i make refund from your website?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac.' },
        { title: 'I am a new user. How should I start? ', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac.' },
        { title: 'Returns and refunds ', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac.' },
        { title: 'Are my details secured? ', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac.' },
    ];

    return (
        <div className="my-10">
            <div className="flex gap-14 items-start lg:flex-row mx-28 sm:flex-col">
                <div>
                    <img src={ab} alt="" />
                </div>
                <div>
                    <h1 className="text-orange-500 font-bold">KNOW MORE ABOUT SHOP</h1>
                    <h1 className="text-4xl font-semibold">Trusted Organic <br /> Food Store</h1>
                    <p className='my-3 border-l-4 border-indigo-500 ps-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore</p>
                    <p className='my-6'>sellers who aspire to be good, do good, and spread goodness. We <br />democratic, self-sustaining, two-sided marketplace which thrives on trust <br /> and is built on community and quality content.</p>
                    <p className='f font-semibold'>Salman Farshe <br />/ Founder & CEO</p>
                </div>
            </div>

            <section class="flex items-center py-10 lg:py-24 bg-stone-50 font-poppins">
                <div class="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
                    <div class="mb-10 text-center">
                        <span
                            class="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-orange-500 uppercase">
                            Team
                        </span>
                        <h1 class="text-3xl font-bold capitalize"> Our Perfect Team </h1>
                    </div>
                    <div class="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <a class="flex justify-center p-5 text-center flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row border" href="#">
                            <div
                                class="inline-block w-full mb-3 overflow-hidden text-xs text-white md:rounded-full h-96 sm:w-64 sm:h-64">
                                <img class="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/RhQYkKYk/pexels-italo-melo-2379005.jpg" alt="" />
                                {/* <img class="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/RhQYkKYk/pexels-italo-melo-2379005.jpg" alt="" /> */}
                            </div>
                            <div class="relative flex self-center flex-1 ">
                                <div className='mx-auto'>
                                    <h2 class="mb-2 text-2xl font-bold dark:text-gray-300">Harry Singh</h2>
                                    <p class="mb-4 text-sm font-medium text-orange-500 dark:text-orange-400">Director</p>
                                    {/* <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
                                        Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad
                                        minim veniam
                                    </p> */}
                                    <div class="flex justify-center">
                                        <span class="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-orange-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-facebook " viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </span>
                                        <span class="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-orange-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-twitter" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </span>
                                        <span class="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-orange-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-instagram" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="flex justify-center p-5 text-center flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row border" href="#">
                            <div
                                class="inline-block mb-3 overflow-hidden text-xs text-white bg-orange-500 md:rounded-full h-96 sm:w-64 sm:h-64">
                                <img class="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/q7pv50zT/pexels-edmond-dant-s-4342352.jpg" alt="" />
                            </div>
                            <div class="relative flex self-center flex-1 lg:ml-8 ">
                                <div class="relative flex self-center flex-1 ">
                                    <div className='mx-auto'>
                                        <h2 class="mb-2 text-2xl font-bold dark:text-gray-300">Harry Singh</h2>
                                        <p class="mb-4 text-sm font-medium text-orange-500 dark:text-orange-400">Director</p>
                                        {/* <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
                                        Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad
                                        minim veniam
                                    </p> */}
                                        <div class="flex justify-center">
                                            <span class="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-orange-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 bi bi-facebook " viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                            </span>
                                            <span class="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-orange-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 bi bi-twitter" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </span>
                                            <span class="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-orange-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="w-6 h-6 bi bi-instagram" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="flex justify-center p-5 text-center flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row border" href="#">
                            <div
                                class="inline-block mb-3 overflow-hidden text-xs text-white bg-orange-500 md:rounded-full h-96 sm:w-64 sm:h-64">
                                <img class="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/05hmHMx1/pexels-emmy-e-2381069.jpg" alt="" />
                            </div>
                            <div class="relative flex self-center flex-1 ">
                                <div className='mx-auto'>
                                    <h2 class="mb-2 text-2xl font-bold dark:text-gray-300">Harry Singh</h2>
                                    <p class="mb-4 text-sm font-medium text-orange-500 dark:text-orange-400">Director</p>
                                    {/* <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
                                        Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad
                                        minim veniam
                                    </p> */}
                                    <div class="flex justify-center">
                                        <span class="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-orange-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-facebook " viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </span>
                                        <span class="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-orange-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-twitter" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </span>
                                        <span class="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-orange-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-instagram" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="flex justify-center p-5 text-center flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row border" href="#">
                            <div
                                class="inline-block mb-3 overflow-hidden text-xs text-white bg-orange-500 md:rounded-full h-96 sm:w-64 sm:h-64">
                                <img class="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/bNyr5cJq/pexels-anastasia-shuraeva-5704720.jpg" alt="" />
                            </div>
                            <div class="relative flex self-center flex-1 ">
                                <div className='mx-auto'>
                                    <h2 class="mb-2 text-2xl font-bold dark:text-gray-300">Harry Singh</h2>
                                    <p class="mb-4 text-sm font-medium text-orange-500 dark:text-orange-400">Director</p>
                                    {/* <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
                                        Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad
                                        minim veniam
                                    </p> */}
                                    <div class="flex justify-center">
                                        <span class="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-orange-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-facebook " viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </span>
                                        <span class="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-orange-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-twitter" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </span>
                                        <span class="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-orange-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-6 h-6 bi bi-instagram" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <h1 className='text-5xl text-center font-semibold my-5'>Some Questions</h1>
            <div className='flex gap-14 items-start lg:flex-row mx-28 sm:flex-col justify-center'>

                <div className="min-h-scree flex items-center justify-center p-8">
                    <Accordion items={accordionItems} />
                </div>

                <div>
                    <img src={faq} alt="" />
                </div>

            </div>

            <div className='flex items-center p-4 mx-auto max-w-7xl'>
                <div className="flex flex-wrap justify-center -mx-4">

                    <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
                        <div className="p-6 mb-0 overflow-hidden bg-white rounded shadow hover:scale-95 transition-all duration-300 ease-in-out">
                            <div className="relative overflow-hidden rounded h-72">
                                <img className="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/9MQr82ZS/pexels-james-wheeler-417074-1.jpg" alt="" />
                                <span
                                    className="absolute bottom-0 px-4 py-2 text-xs text-white -translate-x-1/2 bg-orange-500 left-1/2">
                                    Exercise
                                </span>
                            </div>
                            <div className="pt-6">
                                <span className="block mb-2 text-xs font-semibold text-orange-500 uppercase dark:text-orange-300">
                                    John Doe • 6th Jun, 2022
                                </span>
                                <h2 className="mb-3 text-2xl font-bold leading-9 text-gray-800">
                                    Lorem ipsum dolor sit amet, consectetur
                                </h2>
                                <p className="mb-4 text-base leading-7 text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <a className="flex items-center text-sm font-semibold text-orange-500 dark:text-orange-200 hover:text-orange-600"
                                    href="#">
                                    More Details
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                        className="ml-1" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
                        <div className="p-6 mb-0 overflow-hidden bg-white rounded shadow hover:scale-95 transition-all duration-300 ease-in-out">
                            <div className="relative overflow-hidden rounded h-72">
                                <img className="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/fbT9FYhB/pexels-stijn-dijkstra-2583852.jpg" alt="" />
                                <span
                                    className="absolute bottom-0 px-4 py-2 text-xs text-white -translate-x-1/2 bg-orange-500 left-1/2">
                                    Exercise
                                </span>
                            </div>
                            <div className="pt-6">
                                <span className="block mb-2 text-xs font-semibold text-orange-500 uppercase dark:text-orange-300">
                                    John Doe • 6th Jun, 2022
                                </span>
                                <h2 className="mb-3 text-2xl font-bold leading-9 text-gray-800">
                                    Lorem ipsum dolor sit amet, consectetur
                                </h2>
                                <p className="mb-4 text-base leading-7 text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <a className="flex items-center text-sm font-semibold text-orange-500 dark:text-orange-200 hover:text-orange-600"
                                    href="#">
                                    More Details
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                        className="ml-1" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
                        <div className="p-6 mb-0 overflow-hidden bg-white rounded shadow hover:scale-95 transition-all duration-300 ease-in-out">
                            <div className="relative overflow-hidden rounded h-72">
                                <img className="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/Y23w2gc1/pexels-ricardo-esquivel-1586298.jpg" alt="" />
                                <span
                                    className="absolute bottom-0 px-4 py-2 text-xs text-white -translate-x-1/2 bg-orange-500 left-1/2">
                                    Exercise
                                </span>
                            </div>
                            <div className="pt-6">
                                <span className="block mb-2 text-xs font-semibold text-orange-500 uppercase dark:text-orange-300">
                                    John Doe • 6th Jun, 2022
                                </span>
                                <h2 className="mb-3 text-2xl font-bold leading-9 text-gray-800">
                                    Lorem ipsum dolor sit amet, consectetur
                                </h2>
                                <p className="mb-4 text-base leading-7 text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <a className="flex items-center text-sm font-semibold text-orange-500 dark:text-orange-200 hover:text-orange-600"
                                    href="#">
                                    More Details
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                        className="ml-1" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default About;