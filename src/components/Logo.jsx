import React from 'react'
import { logo } from '../Assets/logo'
import { Link } from 'react-router-dom'


const Logo = () => {
  return (
    <div className='Logo-box'>
      <Link to="/">
        <div className='Logo-text-wrapper'>
          <span className='Logo-h1-text'>ALDIBA</span>
          <span className='small-text'>creates</span>
        </div>
      </Link>
    </div >
  )
}

export default Logo;