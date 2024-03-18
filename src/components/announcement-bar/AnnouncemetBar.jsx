import React, { useState } from 'react'
import './AnnouncementBar.scss'
import { Container } from '../../styled-components/StyledComponent'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const AnnouncementBar = () => {
  const [BarContentData, setBarContentData] = useState([
    {
      title: 'HackerRank AI Day will unveil new innovations in AI and feature industry thought leaders. ',
      link: 'https://ai-day.hackerrank.com/?utm_campaign=ai-day-invite&utm_source=web-promo-popup&utm_medium=web&_gl=1*11zdrsk*_ga*MTEwODIyODg3NS4xNzA4ODM4ODQ3*_ga_BCP376TP8D*MTcxMDY2NTI0OC40LjEuMTcxMDY2NTI0OS4wLjAuMA..'
    },
    {
      title: 'HackerRank Launches Two New Products: SkillUp and Engage ',
      link: 'https://www.hackerrank.com/blog/hackerrank-launches-two-new-products/?utm_campaign=product-launch&utm_source=banner&utm_medium=web'
    },
    {
      title: 'The 2024 Developer Skills Report is here! ',
      link: 'https://www.hackerrank.com/research/developer-skills/2024?utm_campaign=dev-skills-2024&utm_source=web-promo-popup&utm_medium=web'
    }
  ])
  return (
    <div>
        <div className="announcement-bar">
      <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper bar-swiper"
      >
        {
          BarContentData?.map((content, index) =>
            <SwiperSlide className='bar-slide' key={index}>
            <p>{content.title}</p>
            <a className='bar-link' href={content.link}>Read now</a>
            </SwiperSlide>
          )
        }
       
      </Swiper>
      </Container>
        </div>
    </div>
  )
}

export default AnnouncementBar
