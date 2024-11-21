import { MenuApp } from './MenuApp';
import Container from 'react-bootstrap/Container';
import { proyectos, icons  } from '../assets/data';
import { Code, Tooltip } from '@chakra-ui/react';

import {Swiper , SwiperSlide , } from 'swiper/react' ;
import { EffectCoverflow , Pagination , Navigation } from 'swiper/modules' ;
//------------------

import '../styles/proyectosStyles.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Typewriter from 'typewriter-effect' ;



export const Proyects = () => {
  

    return (
      
      <>
          <Container>
          <MenuApp/>
        <div>
        <Code
        width='100%'
        textAlign='center'
       bg='white.400'
        >  <h3>{
          <Typewriter
          onInit={(typewriter) => 
          {
            typewriter.typeString('Estos son mis proyectos!')
            .pauseFor(1400).start()

          }}
          />}</h3>
        </Code>
        </div>  
          </Container>
        <div
          className='containerProyect'
        >
            <Swiper
            spaceBetween={30}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 150,
              stretch: 10,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination ={true}
            grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
            modules={[EffectCoverflow, Navigation, Pagination]}
            className="mySwiper"
            >
              {
                proyectos.map(p => {
                  return(
                    <SwiperSlide key={p.id}
                    className='cover'
                    >
                      <h2
                      className='titulo'
                      >{p.titulo}</h2>
                      <img src={p.urlMiniatura} alt="" />                    
                      <p
                      className='descrip'
                      >{p.desc  }</p>
                      <div className="links">
                        {/* repo */}
                        <Tooltip
                        label= 'ir al repositorio'
                        bg= 'gray.700'
                        color={'white'}
                        rounded={'5px'}
                        >
                        <a href={p.repo} target='-blank'>
                          <img src={p.git} alt="" />
                        </a>
                        </Tooltip>
                        {/* web */}
                        <Tooltip
                        label= 'ir al sitio'
                        bg='green.400'
                        rounded={'5px'}
                        >
                        <a href={p.route} target='-blank'>
                          <img src={p.web} alt="" />
                        </a>
                        </Tooltip>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
              
            </Swiper>
        </div>
           </>
      
    )
}



