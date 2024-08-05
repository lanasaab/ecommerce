import HomePage from '../pages/HomePage'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import ShopPage from '../pages/ShopPage'
import Products from '../pages/Products'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import { Route, Routes } from 'react-router-dom'
import ServicesPage from '../pages/ServicesPage'
import Register from '../pages/Register'
import EventDetails from '../pages/EventDetails'
const Routing = () => {
  return (
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/about" element={<AboutUs/>} />
    <Route path="/contact" element={<ContactUs/>} />
    <Route path="/shop" element={<ShopPage/>} />
    <Route path="/product/:productId" element={<Products/>} /> 
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/signup" element={<SignUpPage/>} />
    <Route path="/services" element={<ServicesPage/>} />
    <Route path="/services/:id" element={<ServicesPage/>} />
    <Route path="/register" element={<Register />} />
    <Route path="/event/:id" element={<EventDetails />} />
  </Routes>
  )
}
export default Routing
