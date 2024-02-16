import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './banner.css';
import bimg from '../assets/bimg.png';
import img2 from '../assets/bimg2.png';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {

    return (
        <>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              'background-color':''
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide className='bgggg'>
            <div className='flexx'>
            <div className="title" data-swiper-parallax="-300">
            50% off in all products
            <div className="subtitle" data-swiper-parallax="-200">
            Man Fashion
            </div>
            <button className='btn' type='button'>Buy Now</button>
            </div>
            <img src={bimg} alt="" />   
            </div>
                     
          </SwiperSlide>
          <SwiperSlide className='bg2'>
            <div className='flexx'>
            <div className="title" data-swiper-parallax="-300">
            50% off in all products
            <div className="subtitle" data-swiper-parallax="-200">
            Women Fashion
            </div>
            <button className='btn' type='button'>Buy Now</button>
            </div>
            <img src={img2} alt="" />   
            </div>
                     
          </SwiperSlide>
 
        </Swiper>
      </>
    );
};

export default Banner;