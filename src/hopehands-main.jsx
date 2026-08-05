import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HopeHandsCaseStudy from './pages/HopeHandsCaseStudy.jsx'
import './index.css'
import './tastelocal.css'
import './smartshop.css'
import './hopehands.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HopeHandsCaseStudy />
  </StrictMode>,
)
