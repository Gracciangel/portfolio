import React, { useState } from 'react';
import { Menu } from './components/Menu' ; 
import Container from 'react-bootstrap/esm/Container' ;
import './styles/general.css' ;
import { tech, icons } from './assets/data';
import { Messege } from './components/Messege';


export const App = () => {
  const [showRepo , setShowRepo] = useState(false)

 return (
  <Container>
    <Menu/>
      <Container>
          <div className="containerPresentacion">
            <h2>Hola! 👋 mi nombre es Angel</h2> <br />
            <p>
              Soy de Buenos Aires, Argentina, actualmente soy estudiante de la carrera de desarrollo de software, comence mi formacion dentro del campo de la programacion, de forma autodidacta, tiempo despues decidi realizar cursos de desarrollo web, <br />
              para luego comenzar una tecnicatura en desarrollo de software en el IFTS Nº16.
            </p>
            <br />
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
  </Container>
 )
}
