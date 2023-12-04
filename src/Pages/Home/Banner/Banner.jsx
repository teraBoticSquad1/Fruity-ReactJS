import React from 'react';
import img11 from '../../../Assets/11.jpg'
import img12 from '../../../Assets/12.jpg'
// import img14 from '../../../Assets/14.png'

const Banner = () => {
    return (
        <div>
            <div className="banner_area mt-120">
                <div className="container">
                    <div className="flex flex-row gap-4 mx-8 my-20 bg-gray-100 justify-center md:justify-center max-[800px]:flex-col ">
                        <div className="transition-all ease-in-out delay-150 hover:-translate-y-2 w-80">
                            <div className="banner_item">
                                <div className="banner_img">
                                    <a href="/">
                                        <img src={img11} alt=''/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="transition-all ease-in-out delay-150 hover:-translate-y-2 w-80">
                            <div className="banner_item">
                                <div className="banner_img">
                                    <a href="/">
                                        <img src={img12} alt=''/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="transition-all ease-in-out delay-150 hover:-translate-y-2 w-80">
                            <div className="banner_item">
                                <div className="banner_img">
                                    <a href="/">
                                        <img src={img11} alt=''/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;