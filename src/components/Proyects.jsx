import React, { useState } from 'react';
import { Menu } from './Menu';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { proyectos, icons } from '../assets/data';
import '../styles/proyectosStyles.css'


export const Proyects = () => {

  const [projectStates, setProjectStates] = useState(proyectos.map(() => false));
  const [classCardStates, setClassCardStates] = useState(proyectos.map(() => false));

  const handleProjectClick = (index) => {
    const newProjectStates = [...projectStates];
    newProjectStates[index] = !newProjectStates[index];
    setProjectStates(newProjectStates);
    const newClass = [...classCardStates];
    newClass[index] = !newClass[index];
    setClassCardStates(newClass);
  };


    return (
      <Container>
        <Menu/> 
        <div className="containerDiv">
          <Card>

            <div className="cardProyectos">
            {
              proyectos.map((e, index)=> 
              <>
              <Card.Img
            className={classCardStates[index] ? 'positionCard' : 'imgCard'}
              src={e.urlMiniatura}
               onClick={()=> handleProjectClick(index)}
               key={e.id}
            >
            </Card.Img>

              <>
                {
                  projectStates[index] && 
            <div className='containerInfo'>
                  <>
                    <p>{e.desc}</p>
                    <div className='tecnoligias'>

                         {/* img close */}
                    <img src={icons[2].close} alt="" 
                    
                    className='close'
                    onClick={()=>handleProjectClick(index)}
                    />  
                    <div className="divEnlaces">
                     
                    {/* enlace repo */}
                    <a href={e.repo} target="_blank" rel="noopener noreferrer">
                      <img src={e.git} alt="" />
                    </a>
                    {/* enlace web */}
                    <a href={e.route} target="_blank" rel="noopener noreferrer">
                      <img src={e.web} alt="" />
                    </a>
                    </div>
                    <div className='divSubtitle'>
                    <h3>tecnologias usadas</h3>
                  <div>
                  {
                        e.tech.map((e , i)=> 
                          <img src={e} alt=""key={i} />
                        )
                      }
                  </div>
                    </div>
                    </div>
                  </>
              </div>
                        
                
              }
              </>
            </>
              )
            }
            </div>
          </Card>
        </div>
      </Container>
    )
}



