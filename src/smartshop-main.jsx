import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SmartShopCaseStudy from './pages/SmartShopCaseStudy.jsx'
import './index.css'
import './tastelocal.css'
import './smartshop.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmartShopCaseStudy />
  </StrictMode>,
)
