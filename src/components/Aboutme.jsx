import React from 'react';
import { MenuApp } from './MenuApp';
import { Container } from 'react-bootstrap';
import { Code } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../styles/general.css'
import Typewriter from 'typewriter-effect' ;
import { icons } from '../assets/data';

export const Aboutme = () => {
  return (
    <>
      <Container>
        <MenuApp />

        <Code
          width='100%'
          textAlign='center'
          bg='blue.400'
          className='me'
        >
            <h3>{
                  <Typewriter
                  onInit={(typewriter) => 
                  {
                    typewriter.typeString('Sobre mí!')
                    .pauseFor(1400).start()
    
                  }}
                  />}</h3>
        </Code>
          
          <p
          className='parrafo-mi'
        >
          <Code
          className='parrafo-mi00'
          
          
          >Me llamo Ángel, soy de Buenos Aires, Argentina. 
             </Code><br />
             <blockquote></blockquote>
        <Code 
        className='parrafo-mi01'
        >Hacia el 2022, comencé adesarrollarme en el mundo de la programación, iniciándome en el desarrollo web.</Code> <br /> 
        <blockquote></blockquote>
          <Code
          className='parrafo-mi02'
            
            
          >Desde entonces, emprendí el camino sin dejar de aprender en esta gran profesión.</Code>
          <blockquote></blockquote>
        
        <Code
        className='parrafo-mi03'
          
        >  Durante el 2023, inicié mis estudios para lograr obtener el título de licenciado en desarrollo de software.</Code>
    <blockquote></blockquote>
          <Code 
          className='parrafo-mi04'
          >Me encanta tocar la 🎸, programar 👨‍💻, la música 🎵 y el rock 🤘.</Code>
          <blockquote></blockquote>
        </p>
          <div className="datos">
            <Code
            
            className='h5'

            >
              <h5>Mis datos de contacto son </h5>
              <div className="contacto-mi">
              <a href="https://api.whatsapp.com/send?phone=+5401124553394&text=Hola Angel! Quiero contactar con vos!.
" target="_blank" rel="noopener noreferrer">
  <img src={icons[3].wsp} alt=""className='img-mi' />
</a>
<Link
to={'/contact'}
className='span'
>
<img src={icons[6].mail} alt="" className='img-mi'/>
</Link>
              </div>
            </Code>
          </div>
      </Container>
    </>
  )
}
