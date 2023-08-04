"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import {  Navigation, Pagination } from 'swiper/modules';

export default function Reviews() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         <div className='flex flex-col items-center bg-blue-900 text-white py-5 rounded-2xl h-[400px]'>
             <img src="/Ellipse 6.png" alt="" style={{width:"50px",height:"50px"}} className="rounded-full"/>
             <p className='mt-2'>John Doe</p>
             <p className='text-sm w-52 mt-5 leading-loose'><span className='text-3xl'>" </span> I've been using CoinBit for a few months now and I'm really impressed with the results. I've been able to make a lot of money with their crypto investment platform and they helped get most of the things i wanted this year, highly recommend. <span className='text-3xl'>"</span></p>
         </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-col items-center bg-blue-900 text-white py-5 rounded-2xl h-[400px]'>
             <img src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" style={{width:"50px",height:"50px"}} className="rounded-full"/>
             <p className='mt-2'>James Smith</p>
             <p className='text-sm w-52 mt-5 leading-loose'><span className='text-3xl'>" </span> I'm a beginner to crypto investing and I was really nervous about getting started. But CoinBit made it really easy for me to get started and their educational resources were really helpful. I'm now making a profit and I'm really happy with their service. <span className='text-3xl'>"</span></p>
         </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col items-center bg-blue-900 text-white py-5 rounded-2xl h-[400px]'>
                <img src="https://images.unsplash.com/photo-1561643241-9abf82d76a68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" style={{width:"50px",height:"50px"}} className="rounded-full"/>
                <p className='mt-2'>Mary Brett</p>
                <p className='text-sm w-52 mt-5 leading-loose'><span className='text-3xl'>" </span> I've been using CoinBit for a year now and I've been really happy with the results. They have a great track record of success and their customer service is always there to help. I would definitely recommend CoinBit to anyone who is looking to invest in crypto <span className='text-3xl'>"</span></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col items-center bg-blue-900 text-white py-5 rounded-2xl h-[400px]'>
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" style={{width:"50px",height:"50px"}} className="rounded-full"/>
                <p className='mt-2'>Andrew Williams</p>
                <p className='text-sm w-52 mt-5 leading-loose'><span className='text-3xl'>" </span>CoinBit has helped me to achieve my financial goals. They are professional and knowledgeable and they always put my needs first <span className='text-3xl'>"</span></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col items-center bg-blue-900 text-white py-5 rounded-2xl h-[400px]'>
                <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" style={{width:"50px",height:"50px"}} className="rounded-full"/>
                <p className='mt-2'>Gary Adamson</p>
                <p className='text-sm w-52 mt-5 leading-loose'><span className='text-3xl'>" </span>I started investing with CoinBit about 6 months agos and I'm very impressed with their services. They've helped me to grow my financial status incredibly and i would definitely recommend them to anyone. <span className='text-3xl'>"</span></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col items-center bg-blue-900 text-white py-5 rounded-2xl h-[400px]'>
                <img src="https://images.unsplash.com/photo-1560087637-bf797bc7796a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" style={{width:"50px",height:"50px"}} className="rounded-full"/>
                <p className='mt-2'>Alexia Robert</p>
                <p className='text-sm w-52 mt-5 leading-loose'><span className='text-3xl'>" </span>Investing with CoinBit was scary at first but i made us my mind to try and that is the best decision i ever made. <span className='text-3xl'>"</span></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col items-center bg-blue-900 text-white py-5 rounded-2xl h-[400px]'>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" style={{width:"50px",height:"50px"}} className="rounded-full"/>
                <p className='mt-2'>Michael Sydney</p>
                <p className='text-sm w-52 mt-5 leading-loose'><span className='text-3xl'>" </span>Shoutout to CoinBit for helping me make my first 500k, I look forward to investing more with CoinBit <span className='text-3xl'>"</span></p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
