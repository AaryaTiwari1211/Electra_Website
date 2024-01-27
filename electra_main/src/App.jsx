import React from 'react'
import './App.css'
import Home from './pages/Home/Home.jsx'
import Videos from './pages/Videos/Videos.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'
import Downloads from './pages/AboutUs/Downloads/Downloads'
import Clients from './pages/Clients/Clients.jsx'
import AboutUs from './pages/AboutUs/Aboutus.jsx'
import Infrastructure from './pages/AboutUs/Infrastructure/Infrastructure'
import QualityPolicy from './pages/AboutUs/QualityPolicy/QualityPolicy'
import Products from './pages/Products/Products'
import Services from './pages/Services/Services'

import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/qualitypolicy" element={<QualityPolicy />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  )
}

export default App
