import React from 'react'
import './App.css'
import Home from './pages/Home/Home.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'
import Downloads from './pages/AboutUs/Downloads/Downloads'
import Clients from './pages/Clients/Clients.jsx'
import AboutUs from './pages/AboutUs/Aboutus.jsx'
import Infrastructure from './pages/AboutUs/Infrastructure/Infrastructure'
import QualityPolicy from './pages/AboutUs/QualityPolicy/QualityPolicy'
import Products from './pages/Products/Products'
import ProductsDesc from './pages/Products/ProductDesc'

import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/aboutus/infrastructure" element={<Infrastructure />} />
        <Route path="aboutus/qualitypolicy" element={<QualityPolicy />} />
        <Route path="/products-services" element={<Products />} />
        <Route path="/products-services/:id" element={<ProductsDesc />} />
      </Routes>
    </>
  )
}

export default App
