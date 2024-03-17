import "./HelpemAll.scss"
import img1 from "../../assets/images/swiperimg1.png"
import img2 from "../../assets/images/swiperimg2.png"
import img3 from "../../assets/images/swiperimg3.png"
import img4 from "../../assets/images/swiperimg4.png"
import img5 from "../../assets/images/swiperimg5.png"
import img6 from "../../assets/images/swiperimg6.png"



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';



const HelpemAll = () => {
  const datas = [
    {
      "title": img1,
      "description": "We’re discovering new ways of attracting candidates to the organization. By using HackerRank, we’re actually improving the tech image of UBS."
    },
    {
      "title": img2,
      "description": "HackerRank has actually allowed us to look for diamonds in the rough that our old process didn’t give us the time or resources to look for."
    },
    {
      "title": img3,
      "description": "We’re promoting our jobs to a much wider audience and allowing candidates to be selected for interviews purely based on the merit of their coding abilities."
    },
    {
      "title": img4,
      "description": "We cut down hiring time by months, which was huge for us. We owe that to HackerRank."
    },
    {
      "title": img5,
      "description": "HackerRank is a critical piece of our candidate’s experience, and hitting the right tone is just as important as identifying good candidates."
    },
    {
      "title": img6,
      "description": "HackerRank has been a huge help in making it easy to assess the skills of all the candidates we interview. Without it, the process of scaling our engineering team would have been very cumbersome."
    }
  ]


  return (
    <section className='helpem'>
      <div>
        <div className="helpem__content">
          <h2>Every company is a tech company. <span>We’re here to help ‘em all.</span></h2>
          <p>More than 3,000 tech teams, representing all industries and from countries around the world, trust HackerRank to connect with developers and add cutting-edge skills to their teams.</p>
          <p>That includes 25% of the Fortune 100 — and that moonshot startup that just came out of stealth.</p>
        </div>
        <div className="helpem__swiper">
          <Swiper 
          modules={[Pagination, Autoplay]} 
          className="mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}>
            {
              datas.map((e,i)=>
                <SwiperSlide key={i}>
                  <div className="swiper__content">
                    <img src={e.title} alt="" style={{width:"90px"}}/>
                    <p>{e.description}</p>
                  </div>
                </SwiperSlide>
              )
            }          
          </Swiper>
        </div>
      </div>
      <div className="helpem__partners">

      </div>
    </section>
  )
}

export default HelpemAll