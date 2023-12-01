// import React from 'react';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import img1 from '../../../Assets/1.png'
import img2 from '../../../Assets/2.png'

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
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default Hero;


// import './styles.css';

// import required modules



