import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';
import { imagesPerfil } from '../assets/images';
import '../styles/images.css'


export const Perfil = () =>{

  return (
    <div className="imagenProfile">
    <Col xs={6} md={4} >
      {
      <Image src={imagesPerfil.perfil} roundedCircle className='perfil'/>
      }
    </Col>
</div>
  );
}

