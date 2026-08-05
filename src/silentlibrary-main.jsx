import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SilentLibraryCaseStudy from './pages/SilentLibraryCaseStudy.jsx'
import './index.css'
import './tastelocal.css'
import './smartshop.css'
import './hopehands.css'
import './silentlibrary.css'

createRoot(document.getElementById('root')).render(
  <StrictMode><SilentLibraryCaseStudy /></StrictMode>,
)
