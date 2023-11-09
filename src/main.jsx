import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './Pages/Loader/Loader.jsx';
import 'react-toastify/dist/ReactToastify.css';

// Import the favicon.ico file
import favicon from './assets/logo.png';
// Function to set the favicon dynamically
function setFavicon() {
  const head = document.querySelector('head');
  const link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'icon';
  link.href = favicon;
  head.appendChild(link);
}

// Call the setFavicon function before rendering the app
setFavicon();
console.log("🛡️ AssembleScript -by SBSKcodes 🛡️");

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
