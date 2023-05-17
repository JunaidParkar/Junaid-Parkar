import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

document.body.onload = () => {
  setTimeout(() => {
    document.getElementById("preloader").style.display = 'none';
  }, 500)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
