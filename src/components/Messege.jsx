import React from 'react';
import Alert from 'react-bootstrap/Alert';
import '../styles/proyectosStyles.css' ;

export const Messege = ({type, messege, style}) => {
  return (
    <Alert variant={type} 
        className={style}
    >
            {messege}
    </Alert>
  )
} ;
