import React from "react";
import ReactDOM from "react-dom/client";

// Component App
import App from "./app";

// Global Styles 
import './styles/styles.scss'
import { CountProvider } from "./context/CountProvider";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <CountProvider>
         <App />
      </CountProvider>
   </React.StrictMode>
)