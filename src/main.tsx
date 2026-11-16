import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { preloadCurrentPage } from './preload';
import './index.css';

preloadCurrentPage().then(() => {
  createRoot(document.getElementById('root')!).render(<App />);
});
