import React from 'react'
import { Link } from 'react-router-dom'


const Logo = () => {
  return (
    <div className='Logo-box'>
      <Link to="/">
        <div className='Logo-text-wrapper'>
          <span className='Logo-h1-text'>ALDIBA</span>
        </div>
      </Link>
    </div >
  )
}

export default Logo;