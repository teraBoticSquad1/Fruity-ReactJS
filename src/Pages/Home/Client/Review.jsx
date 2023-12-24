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
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: ' Doe',
        },
        {
            id: 2,
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'sdjbjvbjkhdbvkjdnvkjb Doe',
        },
        {
            id: 3,
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'sdjbjvbjkhdbvkjdnvkjb o',
        },
        {
            id: 4,
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'sdjbjvbjkhdbvb Doe',
        },
        {
            id: 5,
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'bvkjdnvkjb Doe',
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
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
             >
            {reviews.map((Review) => (
                    <SwiperSlide key={Review.id} className='mx-10 my-10'>
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <p className="text-gray-800">{Review.content}</p>
                            <p className="text-gray-600 mt-4">- {Review.author}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </div>
    );
};

export default Review;

