import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ContainerAnimations } from './Animation/ContainerAnimations';
import './Animation/Animation.css';
import App from './App/App';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContainerAnimations/>
    <App />
  </StrictMode>,
)
