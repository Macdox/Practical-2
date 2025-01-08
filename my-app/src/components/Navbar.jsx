import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='min-w-screen flex justify-around items-center p-5 bg-transparent text-dark'>
      <div className=''>
        LOGO
      </div>
      <div>
        search
      </div>
      <div className='flex space-x-10'>
        <ul className='flex space-x-5 font-medium'>
          <li>Contact</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <Link to="/teacherlogin"> <span className='bg-primary py-3 px-8 text-center rounded-full font-semibold text-white'>Login</span></Link>
      </div>
    </div>
  )
}

export default Navbar