import React, { useState } from 'react';
import { Menu } from './Menu' ;
import Container from 'react-bootstrap/esm/Container';
import '../styles/general.css' ;
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap' ;

import { icons } from '../assets/data';
export const Contact = () => {
  

  return (
    
  <Container>
  <Menu imgWsp={icons[3].wsp}/>

      <div className="containerForm">
     <Form method='POST' className='formulario'
      action="https://formsubmit.co/angelgracci@outlook.com"
     >
      <input type="hidden"name='_next' value="http://localhost:5173/send" />
     <input type="hidden"name='_captcha' value="false" />
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

     
     <Button variant="success" type="submit" >
        Enviar
      </Button>
      
     
     
     </Form>
      </div>
  </Container>
    
  )
}
