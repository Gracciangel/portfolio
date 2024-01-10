import React, { useState } from 'react' ;
import Container from 'react-bootstrap/esm/Container';
import '../styles/general.css' ;
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap' ;
import { MenuApp } from './MenuApp';
import { Code, Text, useColorModeValue } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect' ;

export const Contact = () => {
  
  return (
    
  <Container>
  
    <MenuApp/>
    <Code
    width='100%'
    textAlign='center'
    bg='red.400'
    >
      <h3>{
                  <Typewriter
                  onInit={(typewriter) => 
                  {
                    typewriter.typeString('Estamos en contacto!')
                    .pauseFor(1400).start()
    
                  }}
                  />}</h3>
    </Code>
      <div className="containerForm">
     <Form method='POST' className='formulario'
      action="https://formsubmit.co/angelgracci@outlook.com"
     >
      <input type="hidden"name='_next' value="https://angelmugracciprofile.netlify.app/send" />
     <input type="hidden"name='_captcha' value="false" />
      <Text
      color={useColorModeValue('gray.800', 'gray.200')}
      >
      <FloatingLabel
        controlId="floatingInput"
        label="Ingrese Nombre"
        className="mb-3"
        
      >
    
        <Form.Control type="text" placeholder="Ingrese Nombre" name='nombre' />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Ingrese Email">
        <Form.Control type="email" placeholder="Ingrese Email" name='email' />
      </FloatingLabel>
      <FloatingLabel
        controlId='floatingTextarea'
        label='Ingrese Mensaje'
        className='mb-3'
      >
        <Form.Control as='textarea' placeholder='Ingrese Mensaje' cols='30'
        className='textarea'
        name='mensaje'
        />
      </FloatingLabel>

      </Text>
     
     <Button variant="success" type="submit"

     >
        Enviar
      </Button>
     </Form>
     
      </div>
  </Container>
    
  )
}
