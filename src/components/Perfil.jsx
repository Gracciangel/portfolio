import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { imgPerfil , doc} from '../assets/data';
import '../styles/images.css';
import { useState } from 'react';
import { Messege } from './Messege';
import { Tooltip } from '@chakra-ui/react';


export const Perfil = ({img}) =>{
  const[ShowMessegePerfil, setShowMessegePerfil] = useState(false)
  const[wsp , setWasp] = useState(false)



  return (
        <>
        <Tooltip
          label='Descargar CV'
          bg='green.400'
        >
        <a href={doc.cv} rel="noopener noreferrer" download>
        <img src={imgPerfil.perfil} alt="foto de perfil" 
          className='perfil'
        />
        </a>
        </Tooltip>
        </>
  );
  
} ;

