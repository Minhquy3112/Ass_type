import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import UserLayout from './components/Layout/user'
import HomePage from './pages/home'
import DetailPage from './pages/detail'
import AdminLayout from './components/Layout/admin'
import AdminProductsPage from './pages/Admin/products'
import SignupPage from './pages/signup'
import AdminProductUpdate from './pages/Admin/product-update'
import AddProductPage from './pages/Admin/product-add'
import SigninPage from './pages/signin'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/signin' element={<SigninPage />} />
      <Route path='/' element={<UserLayout />}>
        <Route index element={<HomePage />} />
        <Route path='product/:id' element={<DetailPage />} />
      </Route>

      {/* ADMIN */}
      
      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<AdminProductsPage />} />
      </Route>
      <Route path='admin/products/:id' element={<AdminProductUpdate />} />
      <Route path='admin/products' element={<AddProductPage/>} />
    </Routes>
  </BrowserRouter>
}

export default App
