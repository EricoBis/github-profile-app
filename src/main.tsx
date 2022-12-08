import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import App from './App'
import Home from './pages/Home';
import User from './pages/user/User';

import './styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />}/>
          <Route path="user/:login" element={<User />}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
