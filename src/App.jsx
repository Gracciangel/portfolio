import React, { useEffect, useState } from 'react';
import { MenuApp } from './components/MenuApp';
import Container from 'react-bootstrap/esm/Container';
import './styles/general.css';
import { Footer } from './components/Footer';
import { BtnMode } from './components/BtnMode';
import { Code, Text, useColorModeValue } from '@chakra-ui/react';

//-----------------------------------

export const App = () => {

  return (
    <Container>

      <MenuApp />

      <Container>
        <BtnMode />
        <div className="containerPresentacion">
          <Text color={useColorModeValue('gray.800', 'gray.200')}>
            <div className="text">
              <Code
                colorScheme='yellow'
                textAlign={'center'}
              ><h2>Hola! mi nombre es Angel</h2> </Code>
                <p>
                Soy un apasionado de la programación con sede en Buenos Aires, Argentina. Mi recorrido en el mundo de la programación comenzó con un enfoque en el desarrollo web. Desde la finalización de cursos hasta la práctica en proyectos reales, he estado comprometido en poner en práctica y consolidar mis conocimientos.

              </p>  
            </div>
            <Footer />
          </Text>
        </div>
      </Container>
    </Container>

  )
}
