"use client"

import s from './Testimonials.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Autoplay } from "swiper";
import { useEffect, useState } from 'react';
import Quote from '@/public/assets/quote.svg';
import Image from 'next/image';
import { NextPage } from 'next';

type testimonies = {
  name: string,
  message: string
}

interface componentProps{
  data: testimonies[]
}


const Testimonials: NextPage<componentProps> = ({ data }) => {
  const [slidesPerView, setSlidesPerView] = useState(0.99);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 600) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(0.99);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className={s.ctn}>
      <h1 className='title'>Testimonials</h1>
      <Swiper
        slidesPerView={slidesPerView}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        className={`${s.wrp} wrp`}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >

          {data.map((doc :testimonies, i: number) => 
          <SwiperSlide className={s.slide} key={i}>
            <div className={s.avatar}>
              <Image src={`https://robohash.org/${doc.name}`} alt='avatar' width={40} height={40}/>
              <p className={s.name}>{doc.name}</p>
            </div>

            <p>{doc.message}</p>
            <Image src={Quote} className={s.quote} width={60} height={60} alt='Quote'/>
          </SwiperSlide> 
          )}
      </Swiper>
    </div>
  )
}


export default Testimonials