import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const variable = "I am here";
const reactElement = React.createElement(
  'h1',
  {class:'heading'},
  'hello suryansh!!!',
  variable
)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
