import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ForgotPassword from '../pages/ForgotPassword.js';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Logout from '../pages/Logout.js';
import SignUp from '../pages/Signup.js';
import Navbar from '../components/Navbar';
import CropInfo from '../CropInfo/CropInfo.js';
import Login from '../pages/Login.js'
import PrivateCompenents from '../components/Privatecomponent.js';
import ProductList from '../pages/Products.js';
import Header from '../components/Header.js'
import headerandproductlist from '../pages/productandheadercombine.js'

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<PrivateCompenents />}>
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/header" element={<Header/>}/>
         < Route path="/products" element={<ProductList/>} />
         <Route path='/combine' element={<headerandproductlist/>}/>
       
        </Route>
        <Route path='/cropInfo' element={<CropInfo />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
