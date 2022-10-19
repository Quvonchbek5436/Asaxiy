import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,  } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './carosel.css'


let data=[
    {img: 'https://assets.asaxiy.uz/uploads/banner/desktop/625fe1f1373f3.jpg.webp'},
    {img: 'https://assets.asaxiy.uz/uploads/banner/desktop/633ed75a7d00c.png.webp'},
    {img: 'https://assets.asaxiy.uz/uploads/banner/desktop/633520602d4ca.jpg.webp'},
    {img: 'https://assets.asaxiy.uz/uploads/banner/desktop/633c2226ea012.jpg.webp'},
    {img: 'https://assets.asaxiy.uz/uploads/banner/desktop/62f4b37ece1f6.jpg.webp'},
    {img: 'https://assets.asaxiy.uz/uploads/banner/desktop/628784f087071.jpg.webp'},
]
const Carosel = () => {
    return (
        <div className={'carosel'}>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                // mousewheel={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    data?.map((item,index)=>(
                    <SwiperSlide><img  src={item.img} alt=""/></SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Carosel;