import React from 'react';
import all from '../../../Assets/fruits.png'
import img0 from '../../../Assets/orange.png'
import img01 from '../../../Assets/resberry.png'
import img02 from '../../../Assets/pinapple.png'
import img03 from '../../../Assets/apple.png'

const Category = () => {
    return (
        <div>
            
        <div className="container">
            <div>
                <div>
                    <div>
                        <h1 className="text-center font-bold text-xl">Top Catagories</h1>
                        <p className="text-center">A highly efficient slip-ring scanner for today's diagnostic requirements.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap gap-4 mx-8 justify-center md:justify-center text-center">
                <div className="border-solid border-2 border-black p-10 m-10">
                    <div>
                        <div>
                            <a href="shop.html">
                                <img className='w-40' src={all}/>
                                
                            </a>
                        </div>
                        <div>
                            <h5 className="font-bold hover:text-orange-600"><a href="shop.html">Browse all</a></h5>
                            <h6>(27 items)</h6>
                        </div>
                    </div>
                </div>
                <div className="border-solid border-2 border-gray-700 p-10 m-10">
                    <div>
                        <div>
                            <a href="shop.html">
                                <img className='w-40 h-40' src={img0}/>
                                
                            </a>
                        </div>
                        <div>
                            <h5 className="font-bold hover:text-orange-600"><a href="shop.html">Simple fleshy fruit</a></h5>
                            <h6>(8 items)</h6>
                        </div>
                    </div>
                </div>
                <div className="border-solid border-2 border-black p-10 m-10">
                    <div>
                        <div>
                            <a href="shop.html">
                                <img className='w-40 h-40' src={img01}/>
                                
                            </a>
                        </div>
                        <div>
                            <h5 className="font-bold hover:text-orange-600"><a href="shop.html">Addregate Fruit</a></h5>
                            <h6>(5 items)</h6>
                        </div>
                    </div>
                </div>
                <div className="border-solid border-2 border-black p-10 m-10">
                    <div>
                        <div>
                            <a href="shop.html">
                                <img className='w-40' src={img02}/>
                                
                            </a>
                        </div>
                        <div>
                            <h5 className="font-bold hover:text-orange-600"><a href="shop.html">Multiple Fruit</a></h5>
                            <h6>(4 items)</h6>
                        </div>
                    </div>
                </div>               
                <div className="border-solid border-2 border-black p-10 m-10">
                    <div>
                        <div>
                            <a  className="font-bold hover:text-orange-600"href="shop.html">
                                <img className='w-40' src={img03}/>
                                
                            </a>
                        </div>
                        <div>
                            <h5 className="font-bold hover:text-orange-600"><a href="shop.html">Accessory Fruit	</a></h5>
                            <h6>(10 items)</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Category;