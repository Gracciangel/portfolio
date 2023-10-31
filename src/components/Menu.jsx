import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/images.css'
import { Perfil } from './Perfil';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { icons } from '../assets/data';
export const Menu = () => {
  

  return (
    <>
    <Container>
    <Navbar  expand="lg">
            
      <Navbar.Toggle aria-controls="basic-navbar-nav"className='menuNavbar' />
        <Navbar.Collapse id="control">
          <Navbar.Brand href="#home" id='navbar-brand'>
          <Nav className="me-auto">
            {/* home */}
            <Nav.Item>
            {/* contact */}
          <Nav.Link >
              <Link className='link' to={'/'}>Home</Link >
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {/* contact */}
          <Nav.Link >
              <Link className='link' to={'/contact'}>Contacto</Link >
            </Nav.Link>
          </Nav.Item>
            {/* proyect */}
          <Nav.Item>
          <Nav.Link>
              <Link className='link' to={'/proyect'}>Proyecto</Link>
            </Nav.Link>
          </Nav.Item>
         <Dropdown>
          <Dropdown.Toggle variant='dark'> 
              Enlaces
          </Dropdown.Toggle>
          <Dropdown.Menu className='drop'>
            {/* github */}
            <Dropdown.Item href='https://github.com/Gracciangel' target='_blank' className='dropTitle'>
              GitHub <img src={icons[0].git} alt=""className='imgMenu' />
            </Dropdown.Item>
            {/* linkedin */}
            <Dropdown.Item href='https://www.linkedin.com/in/angel-mugracci/' target='_blank' className='dropTitle'>
              Linkedin <img src={icons[1].lin} alt=""className='imgMenu' />
            </Dropdown.Item>
          </Dropdown.Menu>
         </Dropdown>
          </Nav>
           
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
        <Perfil/>     
    </Container>
      </>

  )
}

   