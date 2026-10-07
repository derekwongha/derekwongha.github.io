import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LocalAiCaseStudy from './pages/LocalAiCaseStudy.jsx'
import './index.css'
import './tastelocal.css'
import './smartshop.css'
import './localai.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocalAiCaseStudy />
  </StrictMode>,
)
