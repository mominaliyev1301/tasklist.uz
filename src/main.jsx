import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './routes/routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
