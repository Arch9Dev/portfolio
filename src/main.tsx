import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// TypeScript may not have a declaration for CSS side-effect imports.
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
