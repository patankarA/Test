import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from  "@mui/material";
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from './context/AuthContext.jsx';
import axios from "axios";
import { Toaster } from "react-hot-toast"

//for connecting backend
axios.defaults.baseURL = "http://localhost:3000/api/v1";
axios.defaults.withCredentials = true;

//create theme
const theme = createTheme({
  typography:{
    fontFamily:"Roboto Slab,serif",
    allVariants:{color:"white"}
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Toaster position='top right'/>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
