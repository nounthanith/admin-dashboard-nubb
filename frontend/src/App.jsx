import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import AdminLayout from './layouts/AdminDashboard'
import Protect from './components/Protect'
import Public from './components/Public'
import Dashboard from './pages/dashboard/Dashboard'
import Category from './pages/category/Category'

function App() {
  return (
    <BrowserRouter>
            <Routes>
                  <Route path='/' element={<Protect> <AdminLayout/> </Protect>}>
                        <Route path='/' element={ <Dashboard/>}></Route>
                        <Route path='/signup' element={ <Signup/>  }></Route>
                        
                        <Route path='/category' element={<Category/>}></Route>
                  </Route>

                  <Route path='/signin' element={<Public> <Signin/> </Public>}></Route>
                  <Route path='/signup' element={<Public> <Signup/> </Public>}></Route>
            </Routes>
    </BrowserRouter>
  )
}

export default App