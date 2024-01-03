import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Darkprovider } from './Context/Mycontext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Darkprovider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Darkprovider>
  
)
