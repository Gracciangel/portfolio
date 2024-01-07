
import { imgPerfil , doc} from '../assets/data';
import '../styles/images.css';
import { useState } from 'react';

import {Alert , Tooltip } from '@chakra-ui/react';


export const Perfil = ({img}) =>{
  const [ alerta , setAlerta ] = useState(false)
  const showAlert =() =>{
    setAlerta(true)
    setTimeout(()=>{
      setAlerta(false)
    }, 1000)
  }
  return (
        <>
        <Tooltip
          label='Descargar CV'
          bg='green.400'
        >
        <a href={doc.cv} rel="noopener noreferrer" download>
        <img src={imgPerfil.perfil} alt="foto de perfil" 
          className='perfil'
          onClick={showAlert }
        />
        </a>
        </Tooltip>
        {
          alerta && (
              <Alert
              position='absolute'
              width='180px'
              status='success'
              right='40%'
              >
                Se ha iniciado la Descarga
              </Alert>
          )
        }
        </>
  );
  
} ;

