// import React from 'react';
import React from 'react';
import '../../Others/Test/Test.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import img1 from '../../../Assets/13.jpg'
import img2 from '../../../Assets/14.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 25000000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper animate-container"
      >
        <SwiperSlide>
          <div>
            <img src={img1} alt='' />
            <div className='bottom-left'>
              <p className='animate-text font-semibold'>100% Geniun Products</p>
              <h1 className='animate-text text-3xl font-bold'>Testy and Healthy <br />Organic Food</h1>
              <button className='ms-0 mt-2 bg-orange-400 text-white font-semibold rounded-lg animate-text'>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt='' />
          <div className='bottom-right'>
          <p className='animate-text font-semibold'>100% Geniun Products</p>
              <h1 className='animate-text text-3xl font-bold'>Testy and Healthy <br />Organic Food</h1>
              <button className='mt-2 bg-orange-400 text-white font-semibold rounded-lg animate-text'>Shop Now</button>
            </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Hero;


// import './styles.css';

// import required modules



