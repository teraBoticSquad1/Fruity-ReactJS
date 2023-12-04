import React, { useState, useEffect } from "react";
import "./HurryUp.css";
import hurry from '../../../Assets/hurry.png'
import food from '../../../Assets/fruits.png'

const COUNTDOWN_TARGET = new Date("2023-12-31T23:59:59");

const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_TARGET - new Date();
    const Days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const Hrs = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const Mins = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const Sec = Math.floor((totalTimeLeft / 1000) % 60);
    return { Days, Hrs, Mins, Sec };
};

const HurryUp = () => {
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='countdown my-20 bg-orange-200 mx-auto'>
            <h4 className="text-center font-bold text-2xl">Hurry Up!!</h4>
            <h3 className="text-center font-bold text-4xl">50% Off in Per Order For Today</h3>
            <div className="flex items-center justify-between">
            <div className="img">
                <img src={food} alt="" />
            </div>
            <div>
            <div className='content'>
                {Object.entries(timeLeft).map((el) => {
                    const label = el[0];
                    const value = el[1];
                    return (
                        <div className='box' key={label}>
                            <div className='value'>
                                <span>{value}</span>
                            </div>
                            <span className='label'> {label} </span>
                        </div>
                    );
                })}
            </div>
           <div className="flex">
           <a href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-orange-300 text-black inline-block mx-auto">
                <span className="absolute top-0 left-0 flex h-full w-0 mb-0 transition-all duration-200 ease-out transform translate-x-0 bg-white border group-hover:w-full opacity-90"></span>
                <span className="relative group-hover:text-orange-300">Button Text</span>
            </a>
            </div>
            </div> 
            <div className="img">
                <img src={hurry} alt="" />
            </div>
            </div>

            
        </div>
    );
};

export default HurryUp;