import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Verify from './pages/Verify'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { FaInstagram } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import FloatingInstagramButton from './components/FloatingInstagramButton';




const App = () => {
  return (

    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] relative' >

      <FloatingWhatsApp
        phoneNumber="8767969429"  // Replace with your WhatsApp number
        accountName="Support Team" // Name shown in chat
        avatar="/step-img.jpg " // Optional: profile picture
        statusMessage="Typically replies within an hour" // Custom status
        chatMessage="Hello! How can we help you?" // Default chat message
        allowEsc // Close chat with ESC key
        allowClickAway // Close chat when clicking outside
        notification // Show notification badge
      />
      <FloatingInstagramButton /> {/* Add Instagram Button */}
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/verify' element={<Verify />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
