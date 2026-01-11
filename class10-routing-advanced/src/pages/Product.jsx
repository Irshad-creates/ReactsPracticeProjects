import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Mens from './Mens'
import Womens from './Womens'
import Kids from './Kids'

const Product = () => {
  return (
    <div >
        <div className='flex justify-center py-10 gap-5' >
            <Link to="/Product/Mens" >Men's</Link>
            <Link to="/Product/Womens" >Women's</Link>
            <Link to="/Product/Kids" >kids</Link>
        </div>
        <Outlet />
    </div>
  )
}

export default Product  