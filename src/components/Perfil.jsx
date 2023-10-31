import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';
import { imagesPerfil, doc } from '../assets/data';
import '../styles/images.css'


export const Perfil = () =>{
 
  return (
    <div className="imagenProfile">
    <Col xs={6} md={4} >
      {
        <a href={doc.cv} download={doc.cv}>
          <Image src={imagesPerfil.perfil} roundedCircle className='perfil'
        
        />
        </a>
      }
    </Col>
</div>
  );
}

