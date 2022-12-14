import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import MemoPage from './memo/MemoPage'
import Tes from './tes'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MemoPage />
  </React.StrictMode>,
  document.getElementById('root')
)