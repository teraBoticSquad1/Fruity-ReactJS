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
            image: "http://127.0.0.1:5500/img/testimonial/5.jpg",
            content: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            name: ' Dewan',
            position: 'Founder',
        },
        {
            id: 2,
            image: "http://127.0.0.1:5500/img/testimonial/5.jpg",
            content: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            name: 'Mr. Sojib',
            position: 'Manager',
        },
        {
            id: 3,
            image: "http://127.0.0.1:5500/img/testimonial/5.jpg",
            content: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            name: 'Salman',
            position: 'Founder',
        },
        {
            id: 4,
            image: "http://127.0.0.1:5500/img/testimonial/5.jpg",
            content: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            name: 'MD Asif',
            position: 'Founder',
        },
        {
            id: 5,
            image: "http://127.0.0.1:5500/img/testimonial/5.jpg",
            content: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            name: 'Hasan Mia',
            position: 'Manager',
        },
        // Add more testimonials as needed
    ];
    return (
        <div className='text-center my-10'>
            <h4>Blogs</h4>
            <h2>Leatest Blogs</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 25000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                {reviews.map((Review) => (
                    <SwiperSlide key={Review.id} className='mx-10 my-10'>
                        <div className="bg-white p-6 rounded-md shadow-md flex flex-col md:flex-row lg:flex-row items-center">
                            <div>
                                <img className='w-48 md:w-96 lg:w-96' src={Review.image} alt="" />
                            </div>
                            <div className='text-left m-6'>
                                <h4 className="text-gray-600 mt-4 font-bold"> {Review.name}</h4>
                                <p className="text-gray-800">{Review.content}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Blog;