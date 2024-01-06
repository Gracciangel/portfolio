import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {createBrowserRouter, Link, RouterProvider} from 'react-router-dom' ;
import { Proyects } from './components/Proyects';
import { Contact } from './components/Contact';
import { Enviado } from './components/Enviado';
import { Start } from './components/Start';
import { ChakraProvider } from '@chakra-ui/react';


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
    path:'/send',
    element:<Enviado/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    
    <ChakraProvider>
    <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
  )
