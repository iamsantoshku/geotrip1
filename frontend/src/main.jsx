// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
// import './index.css';
// import App from './App.jsx';

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter> {/* Wrap your app in BrowserRouter */}
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </BrowserRouter>
// );





import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./context/authContext.jsx";
// import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <AuthContextProvider>
      <App />
    </AuthContextProvider>

  </>
);