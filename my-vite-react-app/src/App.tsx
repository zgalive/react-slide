import { useState } from 'react'
import './App.css'
import {RouterProvider} from 'react-router-dom'
import Router, { routes } from './routers'
import { BrowserRouter, HashRouter, Link, NavLink, Outlet } from '../node_modules/react-router-dom/dist/index'

function App() {

  return (
    <>
    <nav>
      <ul>
        {
          routes[0].children.map(x=>(
            <li><Link to={x.path}>{x.name}</Link></li>
          ))
        }
      </ul>
    </nav>
    <div content>
      <Outlet/>
    </div>
    </>
  )
}

export default App
