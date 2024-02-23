import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const Review = () => {
    const reviews = [
        {
            id: 1,
            image: "https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg",
            content: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            name: ' Dewan',
            position: 'Founder',
        },
        {
            id: 2,
            image: "https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg",
            content: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            name: 'Mr. Sojib',
            position: 'Manager',
        },
        {
            id: 3,
            image: "https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg",
            content: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            name: 'Salman',
            position: 'Founder',
        },
        {
            id: 4,
            image: "https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg",
            content: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            name: 'MD Asif',
            position: 'Founder',
        },
        {
            id: 5,
            image: "https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg",
            content: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            name: 'Hasan Mia',
            position: 'Manager',
        },
        // Add more testimonials as needed
    ];

    return (
        <div className='text-center my-10'>
            <h4 className='t text-orange-500 font-bold text-xl'>//Testimonial</h4>
            <h2 className='text-5xl font-semibold'>Client Feedbacks</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={5}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 25000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 5,
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
                        <div>
                            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl p-5 hover:bg-gray-100">
                                <img className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 sm:w-28 md:rounded-none md:rounded-s-lg" src={Review.image} alt=""/>
                                    <div className="flex flex-col justify-between p-0 leading-normal text-start md:ml-5">
                                        <p className="mb-3 font-normal text-gray-700 ">{Review.content}</p>
                                        <h4 className="text-md font-semibold tracking-tight text-gray-900"> {Review.name}</h4>
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900"> {Review.position}</h5>
                                    </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Review;

