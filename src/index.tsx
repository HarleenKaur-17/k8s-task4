// main.tsx or index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { TaskProvider } from './context/TaskContext';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <TaskProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </TaskProvider>
  </React.StrictMode>
);
