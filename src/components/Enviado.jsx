import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../styles/images.css'
import Modal from 'react-bootstrap/Modal';
import { icons } from '../assets/data';


export const Enviado = () => {
  return (
    <Container>
          <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        

        <Modal.Body>
          <p>Mensaje Enviado con exito 
                <img src={icons[4].send} alt="" className='imgSend'/>
            .</p>
        </Modal.Body>

        <Modal.Footer>
        
        <Nav.Item>
                <Nav.Link>
                <Link className='link' to={'/'}>Ir a Home</Link >
                </Nav.Link>
            </Nav.Item>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </Container>
  )
}
