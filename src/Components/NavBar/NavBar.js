import React from 'react'
import './Nav.css'
import Logo from '../Assets/Logo1.png'

export default function NavBar() {
  return (
    <div className='Nav'>
      <div className='Logo'>
        <img src={Logo} alt='NameofLogo'></img>
      </div>
      <input type='checkbox' id='click'></input>
      <label for='click' className='menu-btn'>
          --- 
      </label>
      <div className='Items'>
        <ul>
          <li><a href='/'> HOME </a></li>
          <li><a href='/aboutus'> ABOUT US </a></li>
          <li><a href='/ContactUs'> CONTACT US </a></li>
          <li><a href='/FeedBack'> FEEDBACK </a></li>
        </ul>
      </div>
    </div>
  )
}
