import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContextWrapper from './context/ContextWrapper.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </React.StrictMode>,
)
