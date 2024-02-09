import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const Blog = () => {
    const reviews = [
        {
            id: 1,
            image: "https://i.postimg.cc/9MQr82ZS/pexels-james-wheeler-417074-1.jpg",
            content: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            name: ' Dewan • 16th Jun, 2023',
            title:'ABC - News',
        },
        {
            id: 2,
            image: "https://i.postimg.cc/9MQr82ZS/pexels-james-wheeler-417074-1.jpg",
            content: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            name: 'Mr. Sojib • 6th Jul, 2021',
            title:'ABC - News',
        },
        {
            id: 3,
            image: "https://i.postimg.cc/9MQr82ZS/pexels-james-wheeler-417074-1.jpg",
            content: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            name: 'Salman • 26th Oct, 2022',
            title:'ABC - News',
        },
        {
            id: 4,
            image: "https://i.postimg.cc/9MQr82ZS/pexels-james-wheeler-417074-1.jpg",
            content: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            name: 'MD Asif • 10th Dec, 2022',
            title:'ABC - News',
        },
        {
            id: 5,
            image: "https://i.postimg.cc/9MQr82ZS/pexels-james-wheeler-417074-1.jpg",
            content: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            name: 'Hasan Mia • 14th Feb, 2024',
            title:'ABC - News',
        },
        // Add more testimonials as needed
    ];
    return (
        <div className='text-center my-10'>
            <h4>Blogs</h4>
            <h2>Leatest Blogs</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={1}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 25000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                }}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                {reviews.map((Review) => (
                    <SwiperSlide key={Review.id} className='mx-10 my-10'>
                        {/* <div className="bg-white p-6 rounded-md shadow-md flex flex-col md:flex-row lg:flex-row items-center">
                            <div>
                                <img className='w-48 md:w-96 lg:w-96' src={Review.image} alt="" />
                            </div>
                            <div className='text-left m-6'>
                                <h4 className="text-gray-600 mt-4 font-bold"> {Review.name}</h4>
                                <p className="text-gray-800">{Review.content}</p>
                            </div>
                        </div> */}

                        <div className="w-2/3">
                            <div className="p-6 mb-0 overflow-hidden bg-white rounded shadow ">
                                <div className="relative overflow-hidden rounded h-72">
                                    <img className="object-cover w-full h-full transition-all hover:scale-110"
                                         src={Review.image} alt="" />
                                    <span
                                        className="absolute bottom-0 px-4 py-2 text-xs text-white -translate-x-1/2 bg-orange-500 left-1/2">
                                        Exercise
                                    </span>
                                </div>
                                <div className="pt-6">
                                    <span className="block mb-2 text-xs font-semibold text-orange-500 uppercase ">
                                    {Review.name}
                                    </span>
                                    <h2 className="mb-3 text-2xl font-bold leading-9 text-gray-800 ">
                                    {Review.title}
                                    </h2>
                                    <p className="mb-4 text-base leading-7 text-gray-600">
                                    {Review.content}
                                    </p>
                                    <a className="flex items-center text-sm font-semibold text-orange-500  hover:text-orange-600"
                                        href="# ">
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
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Blog;

