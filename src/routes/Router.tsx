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
import CheckoutPage from '../pages/CheckoutPage'
import Authenticated from '../components/Authenticated'
const Routing = () => {
  return (
    <Routes>

      <Route element={<Authenticated />}>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:productId" element={<Products />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServicesPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Route>


      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

    </Routes>
  )
}
export default Routing
