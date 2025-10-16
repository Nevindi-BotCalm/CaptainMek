import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    "Root element not found. Please ensure there's a div with id='root' in index.html."
  );
}

const root = createRoot(container as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
