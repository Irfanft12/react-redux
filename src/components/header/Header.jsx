import React from 'react'
import { Link } from 'react-router-dom'
import userImage from "../../assets/user.png"
import "./header.scss"


const Header = () => {
  return (
    <header className='header'>
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className='user-image'>
        <img src={userImage} alt="user" />
      </div>
    </header>
  )
}

export default Header