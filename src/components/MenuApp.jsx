
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import {
  
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { icons } from '../assets/data';
import { Menu, Sidebar, MenuItem } from 'react-pro-sidebar';
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

  //functions

  const toggle = () => {
    setCollapse(!collapse)
    setAnimated(!animated)
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
              {/*  */}
              <MenuItem
                component={<Link
                  to={'/contact'}
                />}
              >
                Contacto
              </MenuItem>
                
            </Menu>
                  
          </Sidebar>
          <Perfil />
        </div>
      </Container>
    </>

  )
}

