import React from 'react'
import { Container } from 'react-bootstrap'
import { tech, icons } from '../assets/data';
import { Messege } from '../components/Messege';
import { useState } from 'react';
import '../styles/images.css'
export const Footer = () => {
    const [showRepo , setShowRepo] = useState(false)
  return (
   <Container>
   <div className="footer">
   <a href="https://github.com/Gracciangel/portfolio" target="_blank" rel="noopener noreferrer">
    <img src={icons[0].git} alt=""className='git' 
      onMouseEnter={()=> setShowRepo(!showRepo)}
      onMouseLeave={()=> setShowRepo(!showRepo)}
    />
    {
      showRepo && <Messege type={'primary'} messege={'repositorio del portfolio'} style={'msjGit'}/>
    }
    </a>
    <h2>Tecnologias que aprendí 👨‍💻</h2>
    <div className="presentacionTech">
      {
        tech.map(e => 
            <img src={e.route} alt="" key={e.id} />
          )
      }
    </div>
   </div>
   </Container>
  )
}
