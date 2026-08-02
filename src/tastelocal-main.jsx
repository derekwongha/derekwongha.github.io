import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TasteLocalCaseStudy from './pages/TasteLocalCaseStudy.jsx'
import './index.css'
import './tastelocal.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TasteLocalCaseStudy />
  </StrictMode>,
)
