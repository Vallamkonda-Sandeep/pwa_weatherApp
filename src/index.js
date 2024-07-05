import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Ensure you have a root element in your HTML file with the id 'root'
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
