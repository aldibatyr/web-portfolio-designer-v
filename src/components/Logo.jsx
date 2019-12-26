import React from 'react'
import { Link } from 'react-router-dom'


const Logo = () => {
  return (
    <div className='Logo-box handheld'>
      <Link to="/">
        <div className='Logo-text-wrapper'>
          <h1 className='Logo-h1-text'>ALDIBA</h1>
        </div>
      </Link>
    </div >
  )
}

export default Logo;