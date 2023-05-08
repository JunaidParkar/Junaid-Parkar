import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import './css/Project.css'

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function Project() {
    return (
        <>
            <div className="project">
                <div className="container">
                    <div className="title">
                        <div className="heading">Project</div>
                        <div className="subheading">
                            <p>My Creations</p>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={false}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://cdn.dribbble.com/userupload/2970030/file/original-b405f07b44b99610820219e22202c3a4.png?compress=1&resize=450x338&vertical=top" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://cdn.dribbble.com/userupload/2616018/file/original-bafccdbda845b083696d07f77bc724ee.png?compress=1&resize=400x300&vertical=top" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://cdn.dribbble.com/users/6047818/screenshots/17785662/media/c38b67a583a7c12a89ce65e4e60cb01a.png?compress=1&resize=400x300&vertical=top" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://cdn.dribbble.com/userupload/4395165/file/original-e5431502cd839e6e9463186355a93ecf.png?compress=1&resize=400x300&vertical=top" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://cdn.dribbble.com/userupload/2620415/file/original-cd58fa72c1bbb6c21bce658f427304e2.png?compress=1&resize=400x300&vertical=top" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://cdn.dribbble.com/users/6234/screenshots/17663976/media/32954d8084f5a357721ee78936695b7f.png?compress=1&resize=400x300&vertical=top" />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="box box2">
                    <h3>
                        <img src="https://img.icons8.com/?size=1x&id=93331&format=png" alt="" />
                        <i>Some of my best creation</i>
                        <img src="https://img.icons8.com/?size=1x&id=93328&format=png" alt="" />
                    </h3>
                    <br />

                    <div className="imgbox">
                        <img className='bestimg' src="https://mir-s3-cdn-cf.behance.net/projects/404/9f0ae2169568579.Y3JvcCw2MTM2LDQ4MDAsMTM2LDA.png" alt="" />
                        <img className='bestimg' src="https://mir-s3-cdn-cf.behance.net/projects/404/9f0ae2169568579.Y3JvcCw2MTM2LDQ4MDAsMTM2LDA.png" alt="" />
                    </div>

                    <p className='para'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id accusamus maiores quisquam corrupti, assumenda voluptatum! Dolores magni nemo sint cupiditate impedit voluptatum inventore repudiandae blanditiis? Reiciendis fugit inventore in labore
                    </p>
                    <br /><br /><br />
                </div>
            </div>

        </>
    )
}

export default Project
