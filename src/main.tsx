
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure the app renders properly despite TS config issues
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Failed to find root element");
}
