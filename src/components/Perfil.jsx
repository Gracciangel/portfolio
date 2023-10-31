import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';
import { imagesPerfil, doc } from '../assets/data';
import '../styles/images.css';
import { useState } from 'react';
import { Messege } from './Messege';


export const Perfil = () =>{
  const[ShowMessege, setShowMessege] = useState(false)




  return (
    <div className="imagenProfile">
    <Col xs={6} md={4} >
      {
        <a href={doc.cv} download={doc.cv}>
          <Image src={imagesPerfil.perfil} roundedCircle className='perfil'
            onMouseEnter={()=>setShowMessege(!ShowMessege)}
            onMouseOut={()=>setShowMessege(!ShowMessege)}
            

        />
        {
          ShowMessege && <Messege type={'success'} messege={'click para descargar el CV '} style={'messegeProfile'} />
          
        }
        </a>
      }
    </Col>
</div>
  );
} ;

