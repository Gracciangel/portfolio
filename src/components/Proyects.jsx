import React, { useState } from 'react';
import { Menu } from './Menu';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { proyectos, icons } from '../assets/data';
import '../styles/proyectosStyles.css'
import { Messege } from './Messege';

export const Proyects = () => {
  const[ShowMessegeClose, setShowMessegeClose] = useState(false)
  const[ShowMessegeGit, setShowMessegeGit] = useState(false)
  const[ShowMessegeWeb, setShowMessegeWeb] = useState(false)
  const [projectStates, setProjectStates] = useState(proyectos.map(() => false));
  const [classCardStates, setClassCardStates] = useState(proyectos.map(() => false));

  const handleProjectClick = (index) => {
    const newProjectStates = [...projectStates];
    newProjectStates[index] = !newProjectStates[index];
    setProjectStates(newProjectStates);
    const newClass = [...classCardStates];
    newClass[index] = !newClass[index];
    setClassCardStates(newClass);
    setShowMessegeClose(false)
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
                    <h2>{e.titulo}</h2>
                    <p>{e.desc}</p>
                    <div className='tecnoligias'>

                         {/* img close */}
                    <img src={icons[2].close} alt="" 
                    
                    className='close'
                    onClick={()=>handleProjectClick(index) }

                    onMouseEnter={()=>setShowMessegeClose(true)}
                    onMouseOut={()=>setShowMessegeClose(false)}
                    
                    />  
                    {
                      ShowMessegeClose && <Messege type={'danger'} style={'messegeClose'} messege={'Cerrar'}/>
                    }
                    <div className="divEnlaces">
                     
                    {/* enlace repo */}
                    <a href={e.repo} target="_blank" rel="noopener noreferrer">
                      <img src={e.git} alt="" 
                          onMouseEnter={()=>setShowMessegeGit(true)}
                          onMouseOut={()=>setShowMessegeGit(false)}
                      />
                   
                    </a>
                    {
                        ShowMessegeGit && <Messege type={'primary'} style={'messegeGit'} messege={'Ver Repo'}/>
                      }
                    {/* enlace web */}
                    <a href={e.route} target="_blank" rel="noopener noreferrer">
                      <img src={e.web} alt="" 
                        onMouseEnter={()=>setShowMessegeWeb(true)}
                        onMouseOut={()=>setShowMessegeWeb(false)}
                      />
                      
                    </a>
                    {
                        ShowMessegeWeb && <Messege type={'warning'} style={'messegeWeb'} messege={'Ir al sitio'}/>
                      }
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



