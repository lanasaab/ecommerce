import React from 'react'
import HomePage from '../pages/HomePage'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import ShopPage from '../pages/ShopPage'
import Products from '../pages/Products'
import { Route, Routes } from 'react-router-dom'

const Routing = () => {
  return (
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/about" element={<AboutUs/>} />
    <Route path="/contact" element={<ContactUs/>} />
    <Route path="/shop" element={<ShopPage/>} />
    <Route path="/product/:productId" element={<Products/>} /> 
  </Routes>
  )
}
export default Routing
