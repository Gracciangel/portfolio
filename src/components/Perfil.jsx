
import { imgPerfil , doc} from '../assets/data';
import '../styles/images.css';
import { useState } from 'react';
import {Alert , Avatar, defineStyle, Tooltip } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Perfil = ({ changeClass}) =>{

  const [ alerta , setAlerta ] = useState(false)
  const showAlert =() =>{
    setAlerta(true)
    setTimeout(()=>{
      setAlerta(false)
    }, 1000)
    //-------------
  }
  const ringCss = defineStyle({
    outlineWidth: "5px",
    outlineColor: "orange",
    outlineOffset: "0px",
    outlineStyle: "solid",
  })
  
  return (
    <>
        <Tooltip
          label='Descargar CV'
          bg='green.400'
          >
        <a href={doc.cv} rel="noopener noreferrer" download>
       <Avatar
       name='Angel'
       colorPalette="blue"
       src={imgPerfil.perfil }
       css={ringCss}
       size='LG'
       className={!changeClass ? 'perfil' : 'perfil2'}

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



Perfil.proptype = {
  changeClass: PropTypes.string.isRequired
}