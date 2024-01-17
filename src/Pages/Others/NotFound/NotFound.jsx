import React from 'react';
import not from '../../../Assets/404-error-removebg-preview.png';
import { FcHome } from "react-icons/fc";

const NotFound = () => {
    return (
        <div className="mt-120">
            <div className="container">
                <div className="flex items-center justify-center flex-col py-20">
                    <div className="">
                        <img src={not} alt='' />
                    </div>
                    <button className='border border-orange-500 rounded hover:bg-orange-200 flex items-center'>
                        Back to Home <FcHome />
                    </button>
                </div>


            </div>
        </div>
    );
};

export default NotFound;