import React from 'react';
import '../../Others/Test/Test.css'
import all from '../../../Assets/fruits.png'
import img0 from '../../../Assets/orange.png'
import img01 from '../../../Assets/resberry.png'
import img02 from '../../../Assets/pinapple.png'
import img03 from '../../../Assets/apple.png'

const Category = () => {
    return (
        <div>
            
        <div className="container bg-orange-100">
            <div className='mt-10'>
                <div>
                    <div>
                        <h1 className="text-center font-bold text-3xl">Top Catagories</h1>
                        <p className="text-center">A highly efficient slip-ring scanner for today's diagnostic requirements.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap mx-28 justify-center md:justify-center text-center">
                <div className="border-solid border border-neutral-500 group bg-white p-8 m-8 line">
                    <div>
                        <div>
                            <a href="shop.html">
                                <img className='w-40' src={all} alt=''/>
                                
                            </a>
                        </div>
                        <div>
                            <h5 className="font-bold group-hover:text-orange-600 text-black"><a href="shop.html">Browse all</a></h5>
                            <h6 className='text-black'>(27 items)</h6>
                        </div>
                    </div>
                </div>
                <div className="border-solid border border-neutral-500 group bg-white p-8 m-8 line">
                    <div >
                        <div>
                            <a href="shop.html">
                                <img className='w-40 h-40 sm:h-full mb-8' src={img0} alt=''/>
                                
                            </a>
                        </div>
                        <div>
                            <h5 className="font-bold group-hover:text-orange-600 text-black"><a href="shop.html">Simple fleshy fruit</a></h5>
                            <h6 className='text-black'>(8 items)</h6>
                        </div>
                    </div>
                </div>
                <div className="border-solid border border-neutral-500 group bg-white p-8 m-8 line">
                    <div >
                        <div>
                            <a href="shop.html">
                                <img className='w-40 h-40 sm:full' src={img01} alt=''/>
                                
                            </a>
                        </div>
                        <div>
                            <h5 className="font-bold group-hover:text-orange-600 text-black"><a href="shop.html">Addregate Fruit</a></h5>
                            <h6 className='text-black'>(5 items)</h6>
                        </div>
                    </div>
                </div>
                <div className="border-solid border border-neutral-500 group bg-white p-8 m-8 line">
                    <div >
                        <div>
                            <a href="shop.html">
                                <img className='w-40' src={img02} alt=''/>
                                
                            </a>
                        </div>
                        <div>
                            <h5 className="font-bold group-hover:text-orange-600 text-black"><a href="shop.html">Multiple Fruit</a></h5>
                            <h6 className='text-black'>(4 items)</h6>
                        </div>
                    </div>
                </div>               
                <div className="border-solid border border-neutral-500 group bg-white p-8 m-8 line">
                    <div >
                        <div>
                            <a  className="font-bold hover:text-orange-600"href="shop.html">
                                <img className='w-40' src={img03} alt=''/>
                                
                            </a>
                        </div>
                        <div>
                            <h5 className="font-bold group-hover:text-orange-600 text-black"><a href="shop.html">Accessory Fruit	</a></h5>
                            <h6 className='text-black'>(10 items)</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Category;