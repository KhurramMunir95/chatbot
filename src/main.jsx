import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../public/assets/css/style.css'
import '../public/assets/css/responsive.css'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
