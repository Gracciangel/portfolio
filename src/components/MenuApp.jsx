
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../assets/data';
import { Menu, Sidebar, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Perfil } from './Perfil'
import { SvgButon } from './SvgButon';
//---------------------
import '../styles/menu.css';
import '../styles/images.css'
import '../styles/general.css'


//----------------------------------
export const MenuApp = () => {

  const [collapse, setCollapse] = useState(false)
  const [animated, setAnimated] = useState(false)
  const [perfil, setPerfil] = useState(false)
  //functions

  const toggle = () => {
    setCollapse(!collapse)
    setAnimated(!animated)
    setPerfil(!perfil)
    if (animated) {
      return true;
    }
  }

  return (
    <>
      <Container>
        <div className="containerMenu">


          <SvgButon
            cb={toggle}
            state={animated}
          />

          <Sidebar collapsed={collapse}
            collapsedWidth='0px'

          >
            <Menu

            >
              <MenuItem

                component={<Link
                  to={'/home'}
                />}
              >
                Home
              </MenuItem>
              {/*  */}
              <MenuItem
                component={<Link
                  to={'/proyect'}
                />}
              >
                Proyectos
              </MenuItem>
              <MenuItem
                component={
                  <Link
                    to={'/about'}
                  />
                }
              >
                Sobre mí
              </MenuItem>
              {/*  */}
              <MenuItem
                component={<Link
                  to={'/contact'}
                />}
              >
                Contacto
              </MenuItem>

              
                <SubMenu
                  label='Enlaces'
                  className='submenu'
                >
                <div className="submenu-menu">
                <MenuItem>
                    <a href="https://github.com/Gracciangel"
                      target='_blank'
                    >
                      <img src={icons[0].git} alt="" />
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="https://www.linkedin.com/in/angel-mugracci/" target="_blank" rel="noopener noreferrer">
                      <img src={icons[1].lin} alt="" />
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="https://api.whatsapp.com/send?phone=+5401124553394&text=Hola Angel! Quiero contactar con vos!.
" target="_blank" rel="noopener noreferrer">
  <img src={icons[3].wsp} alt="" />
</a>
                  </MenuItem>
                </div>
                </SubMenu>
            </Menu>

          </Sidebar>
          <Perfil changeClass={perfil} />
        </div>
      </Container>

    </>

  )
}

