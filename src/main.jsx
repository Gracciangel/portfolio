import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {createBrowserRouter, Link, RouterProvider} from 'react-router-dom' ;
import { Proyects } from './components/Proyects';
import { Contact } from './components/Contact';
import { Start } from './components/Start';
import { ChakraProvider } from '@chakra-ui/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import './styles/main.css'
import { Aboutme } from './components/Aboutme';
import { Send } from './components/Send';
const router=  createBrowserRouter([
  {
    path: '/',
    element: <Start/>
  },
  {
    path: '/home',
    element: <App/>
  },
  {
    path:'/proyect',
    element: <Proyects/>
  },
  {
    path:'/contact',
    element: <Contact/> 
  },
  {
    path: '/about',
    element: <Aboutme/>
  },
  {
    path: '/send',
    element: <Send/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    
    <ChakraProvider >
    <ParallaxProvider>
    
    <RouterProvider router={router}/>
    
    </ParallaxProvider>
    </ChakraProvider>
  </React.StrictMode>
  )
