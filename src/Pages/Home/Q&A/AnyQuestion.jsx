import React from 'react';
import "./AnyQuestion.css";
import hurry from '../../../Assets/hurry.png'
import food from '../../../Assets/fruits.png'

const AnyQuestion = () => {
    return (
        <div>
            <div className="bg bg-orange-100 py-5" data-bg="">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="call-to-action-inner call-to-action-inner-4 text-center">


                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className="img">
                        <img src={food} alt="" />
                    </div>
                    <div className="">
                        <div className="text-center mb-6">
                            <h6 className="text-orange-600	 font-bold">//  any question you have  //</h6>
                            <h1 className="text-4xl font-bold">897-876-987-90</h1>
                        </div>
                        <a href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-orange-300 text-black inline-block mx-auto me-3">
                            <span className="absolute top-0 left-0 flex h-full w-0 mb-0 transition-all duration-200 ease-out transform translate-x-0 bg-white border group-hover:w-full opacity-90"></span>
                            <span className="relative group-hover:text-orange-300">Make a Call</span>
                        </a>

                        <a href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-white text-black inline-block mx-auto">
                            <span className="absolute top-0 left-0 flex h-full w-0 mb-0 transition-all duration-200 ease-out transform translate-x-0 bg-orange-300 border group-hover:w-full opacity-90"></span>
                            <span className="relative group-hover:text-white">Contacs Us</span>
                        </a>
                    </div>
                    <div className="img">
                        <img src={hurry} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnyQuestion;