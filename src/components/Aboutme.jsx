import React from 'react';
import { MenuApp } from './MenuApp';
import { Container } from 'react-bootstrap';
import { Code } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../styles/general.css'
import Typewriter from 'typewriter-effect' ;

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
          Me llamo Ángel, soy de Buenos Aires, Argentina. Hacia el 2022, comencé a desarrollarme en el mundo de la programación, iniciándome en el desarrollo web. Desde entonces, emprendí el camino sin dejar de aprender en esta gran profesión.
          <blockquote></blockquote>
        
          Durante el 2023, inicié mis estudios para lograr obtener el título de licenciado en desarrollo de software.
    <blockquote></blockquote>
          Me encanta tocar la 🎸, el aprendizaje tecnológico 👨‍💻, la música 🎵 y el rock 🤘.
          <blockquote></blockquote>
            <strong>
            Sin duda, puedes enviarme un mensaje por <a href="https://api.whatsapp.com/send?phone=+5401124553394&text=¡Hola Ángel! Quiero contactar contigo." target="_blank" rel="noopener noreferrer"><b style={{color:'#477317'}}>WhatsApp 📱</b></a> o visitar la sección de <Link to={'/contact'}><b style={{color:'#b6d47fab'}}>Contacto ✉️</b></Link>.
            </strong>
        </p>
      </Container>
    </>
  )
}
