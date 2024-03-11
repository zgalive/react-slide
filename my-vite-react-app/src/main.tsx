import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '../node_modules/react-router-dom/dist/index'

import './index.css'
import Router from './routers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>,
)
