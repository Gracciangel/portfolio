import React from 'react';
import { Menu } from './components/Menu' ; 
import Container from 'react-bootstrap/esm/Container' ;
import './styles/general.css' ;
import { tech } from './assets/data';


export const App = () => {
 return (
  <Container>
    <Menu/>
      <Container>
          <div className="containerPresentacion">
            <h2>Hola! 👋 mi nombre es Angel</h2> <br />
            <p>
              Soy de Buenos Aires, Argentina, actualmente soy estudiante de la carrera de desarrollo de software, comence mi formacion dentro del campo de la programacion, de forma autodidacta, luego decidi realizar cursos de desarrollo web. <br />
              Luego inicie una tecnicatura en desarrollo de software en el IFTS Nº16.
            </p>
            <br />
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
