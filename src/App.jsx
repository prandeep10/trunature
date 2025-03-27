import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import NutritionStatus from './pages/NutritionStatus/NutritionStatus'
import CustomMealPlanner from './pages/CustomMealPlanner/CustomMealPlanner'
import Navbar from './components/navbar/Navbar'
import ContactUs from './pages/ContactUs/ContactUs'


const App = () => {
  return (
    <Router>
<Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/homepage" element={<HomePage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/nutrition-status" element={<NutritionStatus/>} />
        <Route path="/custom-meal-planner" element={<CustomMealPlanner/>} />
        <Route path="/contact" element={<ContactUs/>} />
      
      </Routes>
    </Router>
  )
}

export default App
