import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ContainerAnimaciones } from './Animacion/ContainerAnimaciones';
import './Animacion/Animacion.css';
import App from './App/App';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContainerAnimaciones/>
    <App />
  </StrictMode>,
)
