import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { imagesPerfil, doc } from '/src/assets/data.js';
import '../styles/images.css';
import { useState } from 'react';
import { Messege } from './Messege';


export const Perfil = ({img}) =>{
  const[ShowMessegePerfil, setShowMessegePerfil] = useState(false)
  const[wsp , setWasp] = useState(false)



  return (
    <div className="imagenProfile">
    <Col xs={6} md={4} >
      {
        <a href={doc.cv} download={doc.cv}>
          <Image src={imagesPerfil.perfil} roundedCircle className='perfil'
            onMouseEnter={()=>setShowMessegePerfil(!ShowMessegePerfil)}
            onMouseOut={()=>setShowMessegePerfil(!ShowMessegePerfil)}
            

        />
        {
          ShowMessegePerfil && <Messege type={'success'} messege={'click para descargar el CV '} style={'messegeProfile'} />
          
        }
        </a>
      }
    </Col>
         <a href="http://wa.me/1124553394" target="_blank" rel="noopener noreferrer"
        >
          {
            wsp && <Messege type={'success'} messege={'hablamos por whatsapp?'} style={'wspHover'}/>
          }
        <img src={img}alt=""className='wsp'
          onMouseEnter={()=>setWasp(!wsp)}
          onMouseOut={()=> setWasp(!wsp)}
        />
  
        </a>
          
</div>

  );
  
} ;

