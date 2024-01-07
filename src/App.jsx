import React, { useEffect, useState } from 'react';
import { MenuApp } from './components/MenuApp';
import Container from 'react-bootstrap/esm/Container' ;
import './styles/general.css' ;
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';
import { BtnMode } from './components/BtnMode';
import { Text, useColorModeValue } from '@chakra-ui/react';


export const App = () => {
  
 return (
   <motion.div
  initial={{opacity: 0}}
  animate={{
    opacity: 1
  }}
  transition={{
    delay: 1
  }}
  >



  <Container>
      <MenuApp/>
    <Container>
      <BtnMode/>
        <div className="containerPresentacion">
    <Text color={useColorModeValue('gray.800', 'gray.200')}>
          <div className="text">

          <h2>Hola! 👋 mi nombre es Angel</h2> <br />
          <p>
              Soy un apasionado de la programación con sede en Buenos Aires, Argentina. Mi recorrido en el mundo de la programación comenzó con un enfoque en el desarrollo web. Desde la finalización de cursos hasta la práctica en proyectos reales, he estado comprometido en poner en práctica y consolidar mis conocimientos.
            <br />Mi primer proyecto se desarrolló exclusivamente en HTML, sin JavaScript, y gestionando los estilos únicamente a través de CSS. Esta experiencia me permitió comprender los fundamentos del diseño web estático y la importancia de la maquetación.
            <br />A medida que avanzaba, reconocí la necesidad de preprocesadores para gestionar de manera eficiente los estilos, y me adentré en el mundo del dinamismo utilizando JavaScript. Además, fui profundizando en el paradigma orientado a objetos, que es esencial para el desarrollo de aplicaciones más complejas y sostenibles.
            <br />Durante mi aprendizaje, mantuve un contacto constante con la programación, no solo a través de cursos, sino también dedicando mi tiempo libre a la exploración de nuevas tecnologías y conceptos. Esta pasión por el aprendizaje continuo sigue siendo una parte fundamental de mi enfoque.

          </p>
          <br />
          </div>
        <Footer/>

          
  </Text>
        </div>
    </Container>
  </Container>
  </motion.div>
 )
}
