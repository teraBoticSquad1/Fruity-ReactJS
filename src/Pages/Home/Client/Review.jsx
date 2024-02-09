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
            <h4>Testimonial</h4>
            <h2>Client Feedbacks</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 25000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                {reviews.map((Review) => (
                    <SwiperSlide key={Review.id} className=''>
                        {/* <div className="bg-white rounded-md shadow-md flex flex-col md:flex-row sm:flex-row xm:flex-row items-center">
                            <div>
                                <img className='w-48 md:w-96 lg:w-96' src={Review.image} alt="" />
                            </div>
                            <div className='text-left m-6'>
                                <p className="text-gray-800">{Review.content}</p>
                                <h4 className="text-gray-600 mt-4 font-bold"> {Review.name}</h4>
                                <h5 className="text-gray-600 mt-4 font-bold"> {Review.position}</h5>
                            </div>
                        </div> */}
                        <div>
                            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl p-5 hover:bg-gray-100">
                                <img class="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 sm:w-28 md:rounded-none md:rounded-s-lg" src={Review.image} alt=""/>
                                    <div class="flex flex-col justify-between p-0 leading-normal text-start md:ml-5">
                                        <p class="mb-3 font-normal text-gray-700 ">{Review.content}</p>
                                        <h4 class="text-lg font-bold tracking-tight text-gray-900"> {Review.name}</h4>
                                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900"> {Review.position}</h5>
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

