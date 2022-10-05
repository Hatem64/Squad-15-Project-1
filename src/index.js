import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { createGlobalStyle } from 'styled-components';
import Dashboard from './components/Dashboard';
import reportWebVitals from './reportWebVitals';

// Create CSS variables globally
const GlobalStyle = createGlobalStyle`
  :root {
    --Snow:#FFFFFF;
    --Purple:#793EF5;
    --X:#72F500;
    --Dark:#1E1E1E;
    --Yellow:#FFC33F;
    --Red:#FB5159;
    --Blue:#2153FF;
    --Gray-50:#E2E6EB;
    --Gray-10:#F1F4F8;
    --Field-Stroke:#CECECE;
    
  }
`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Dashboard />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
