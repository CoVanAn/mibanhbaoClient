import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/myOrders'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Contact from './pages/Contact/Contact'
import ShippingPolicy from './pages/Policy/ShippingPolicy/ShippingPolicy'
import PrivacyPolicy from './pages/Policy/PrivacyPolicy/PrivacyPolicy'
import ExchangePolicy from './pages/Policy/ExchangePolicy/ExchangePolicy'
import AboutUs from './pages/AboutUs/AboutUs'

import HowtoBuy from './pages/Support/HowtoBuy/HowtoBuy'
import Shipping from './pages/Support/Shipping/Shipping'
import TermsofService from './pages/Support/TermsofService/TermsofService'
import PaymentInstructions from './pages/Support/PaymentInstructions/PaymentInstructions'
// import AccountPage from './pages/AccountPage.jsx'
import AccountInfo from './pages/Account/Account'
// import ReturnPolicy from './pages/Policy/ReturnPolicy/ReturnPolicy'


const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <div className="app">
        <Header setShowLogin={setShowLogin} />
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="exchange-policy" element={<ExchangePolicy />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="huong-dan-mua-hang" element={<HowtoBuy />} />
          <Route path="huong-dan-giao-nhan" element={<Shipping />} />
          <Route path="dieu-khoan-dich-vu" element={<TermsofService />} />
          <Route path="huong-dan-thanh-toan" element={<PaymentInstructions />} />
          <Route path="/account" element={<AccountInfo />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
