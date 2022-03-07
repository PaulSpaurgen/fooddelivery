import React from 'react'
import './Hero.css'
import hero from '../Assets/Hero.jpeg'
export default function Hero() {
  return (
    <div className='container'>
        <div className='Hero'>
          <img src={hero} alt='Background'></img>
        </div>
        <div className='whatsapp'>
          <a href='https://api.whatsapp.com/send?phone=+918210501526'><button>WHATS APP</button></a>
          <button> CALL - NOW </button>
        </div>
        <div className='content'>
          <h1>
            ORDER NOW ON 
          </h1>
          <h1>
             WHATS APP 
          </h1>
          <h1>
            FOR 15% OFF
          </h1>
        </div>
      </div>
  )
}
