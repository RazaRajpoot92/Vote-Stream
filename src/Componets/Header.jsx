import React from 'react'
import "../Style/Header.scss"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className='nav-container'>
        <h1 className='nav-logo'>Vote Stream</h1>
        <div className='nav-links'>
            <Link to={"/"} className='nav-link'>Home</Link>
            <a className='nav-link'>Vote</a>
            <a className='nav-link'>Trending</a>
            <Link to={"/addplayer"} className=' btn'>Add Player</Link>
        </div>
    </nav>
  )
}

export default Header