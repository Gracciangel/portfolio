import React, { useEffect, useState } from 'react' ;
import { Menu } from './Menu' ;
import Container from 'react-bootstrap/esm/Container' ;
import Card from 'react-bootstrap/Card';
import { proyectos } from '../assets/images';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Proyects = () => {

  const [showinfo, setShowInfo]= useState(false)
 
  const handleShow = ()=>{
    setShowInfo(!showinfo)
  }
    

  return (
    <>
    <Container>
        <Menu/>
        
        <Card className='program'>
    <div className="containerDiv">
    {
            proyectos.map(i => {
            return(
                <Row key={i.id}>
                  <Col>
                    <Card.Img src={i.url} className='cardProyectos' onClick={handleShow}/>
                  {
                    showinfo ?? <Card.Body>{i.titulo}</Card.Body>
                  }
                  </Col>
                </Row>
            )
            })
          }
    </div>
        </Card>
        
        
    </Container>
    </>
  )
  } ; 