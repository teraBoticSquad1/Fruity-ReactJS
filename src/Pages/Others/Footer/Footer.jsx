import React from 'react';
import "./Footer.css";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='bg bg-orange-100 py-5 px-10'>
            <div className='flex flex-col lg:flex-row gap-5 justify-center mx-auto'>

                <div className='col basis-1/2'>
                    <h1 className=" text-3xl font-semibold">Fruity</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
                    </p>
                    <div className='flex items-center gap-2'><CiLocationOn /> <p>Brooklyn, New York, United States</p></div>
                    <div className='flex items-center gap-2'><FiPhoneCall /> <p>+0123-456789</p></div>
                    <div className='flex items-center gap-2'><CiMail /> <p>example@example.com</p></div>
                    <div className='flex gap-2 mt-1'>
                    <FaFacebookF />
                    <BsTwitterX />
                    <FaLinkedin />
                    <FaYoutube />
                    </div>
                </div>
                <div className='col basis-1/4'>
                    <h1 className=" text-2xl font-semibold">Company</h1>
                    <p>About</p>
                    <p>Blog</p>
                    <p>All Products</p>
                    <p>Locations Map</p>
                    <p>Any Question</p>
                    <p>Contact Us</p>
                </div>
                <div className='col basis-1/4'>
                    <h1 className=" text-2xl font-semibold">Services.</h1>
                    <p>Order Tracking</p>
                    <p>Wish List</p>
                    <p>Login</p>
                    <p>My Account</p>
                    <p>Terms & Conditions</p>
                    <p>Offers</p>
                </div>
                <div className='col basis-1/4'>
                    <h1 className=" text-2xl font-semibold">Customer Care</h1>
                    <p>Login</p>
                    <p>My Account</p>
                    <p>Wish List</p>
                    <p>Order Tracking</p>
                    <p>Any Question</p>
                    <p>Contact Us</p>
                </div>
                <div className='col basis-1/2'>
                    <h1 className=" text-2xl font-semibold">Newsletter</h1>
                    <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                    <div className=''>
                    <div className="relative">
                        <input type="text" placeholder="Search" className="border rounded-md p-2 w-60" />
                        <button className="absolute border-t-2 border-r-2 border-b-2 bg-lime-400 top-1 ">
                        <IoIosSend />
                        </button>
                    </div>
                    </div>
                    <h2 className='font-bold'>We Accept</h2>
                    <img src="http://127.0.0.1:5500/img/icons/payment-4.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Footer;