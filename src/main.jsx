import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' ;
import { Proyects } from './components/Proyects';
import { Contact } from './components/Contact';


const router=  createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path:'/proyect',
    element: <Proyects/>
  },
  {
    path:'/contact',
    element: <Contact/> 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
