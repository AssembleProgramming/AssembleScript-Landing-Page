import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './Pages/Loader/Loader.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loader />}>
    <App/>
  </Suspense>
)
