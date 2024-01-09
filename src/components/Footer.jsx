import React from 'react'
import { Container } from 'react-bootstrap'
import { tech } from '../assets/data';
import '../styles/images.css'
import {Swiper , SwiperSlide} from 'swiper/react'
import { Code } from '@chakra-ui/react';
// stilos de swiper / componente
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules'

// ---------------------------------
export const Footer = () => {
    
  return (
   <Container>
   <div className="footer">

    <Code
      flexDirection={'row'}
      textAlign={'center'}
      colorScheme='green'
      children="Tecnologías, librerías y frameworks"
      padding='1rem'
    ></Code>
    <div className="carouselTech">
      {
        <Swiper
        spaceBetween={100}
        loop={true}
        autoplay={{
          delay:700,
          disableOnInteraction: true,
        }}
      
        
        modules={[Autoplay]}
        className="mySwiper"
        >
          {
            tech.map(e => 
              <SwiperSlide key={e.id}>
              <div className="containerSwiper">
              <img src={e.route} alt=""/>
                <span>{e.nombre}</span>
              </div>
              </SwiperSlide>
            )
          }
        </Swiper>
      }
    </div>
   </div>
   </Container>
  )
}
