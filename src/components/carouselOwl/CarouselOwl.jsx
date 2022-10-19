import React from "react";
// Import Swiper React components
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carouselOwl.css";



const CarouselOwl = () => {
    return (
        <div className="owlCarousel_container">
            <div className="container">
                <div className="owlCarousel_wrapper">
                    {/*<div className="owl-carousel owl-theme owl-loaded">*/}
                        {/*<div>*/}
                        {/*    <img src="https://assets.asaxiy.uz/brand/webp//5e15c63e06b95.webp" alt="" />*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img src="https://assets.asaxiy.uz/brand/webp//5e15c4697e437.webp" alt="" />*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img src="https://assets.asaxiy.uz/brand/webp//6064cdf0ce901.webp" alt="" />*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img src="https://assets.asaxiy.uz/brand/webp//5e15c51449bd0.webp" alt="" />*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img src="https://assets.asaxiy.uz/brand/webp//5ff6f8872a0db.webp" alt="" />*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img src="https://assets.asaxiy.uz/brand/webp//5ff6f8872a0db.webp" alt="" />*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img src="https://assets.asaxiy.uz/brand/webp//605036814c07e.webp" alt="" />*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img src="https://assets.asaxiy.uz/brand/webp//6013a8b3bc61c.webp" alt="" />*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img src="https://assets.asaxiy.uz/brand//6309b524cec23.png" alt="" />*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img src="https://assets.asaxiy.uz/brand//630b04bbdadf4.jpg" alt="" />*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img src="https://assets.asaxiy.uz/brand/webp//5e15c4ec85cf2.webp" alt="" />*/}
                        {/*</div>*/}
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={5}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img height={80}  src="https://assets.asaxiy.uz/brand/webp//5e15c63e06b95.webp" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img height={80}  src="https://assets.asaxiy.uz/brand/webp//5e15c4697e437.webp" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img height={80}  src="https://assets.asaxiy.uz/brand/webp//6064cdf0ce901.webp" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img height={80}  src="https://assets.asaxiy.uz/brand/webp//5e15c51449bd0.webp" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img height={80}  src="https://assets.asaxiy.uz/brand/webp//5ff6f8872a0db.webp" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img height={80}  src="https://assets.asaxiy.uz/brand/webp//605036814c07e.webp" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img height={80}  src="https://assets.asaxiy.uz/brand/webp//6013a8b3bc61c.webp" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img height={80}  src="https://assets.asaxiy.uz/brand//6309b524cec23.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img height={80}  src="https://assets.asaxiy.uz/brand//630b04bbdadf4.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img height={80}  src="https://assets.asaxiy.uz/brand/webp//5e15c4ec85cf2.webp" alt="" />
                            </SwiperSlide>
                        </Swiper>
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default React.memo(CarouselOwl);