import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Kids from './pages/Kids'
import Course from './pages/Course'
import CourseDetails from './pages/CourseDetails'
import Navbar2 from './components/Navbar2'


const App = () => {
  return (
    <div className='bg-black h-screen w-full text-white'>
      <Navbar />
      <Navbar2 />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Course' element={<Course />} />
        <Route path='/Course/:id' element={<CourseDetails />} />
        
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Product' element={<Product />} >
          <Route path='Mens' element={<Mens />} />
          <Route path='Womens' element={<Womens />} />
          <Route path='kids' element={<Kids />} />
        </Route>
        

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App