import React from 'react'
import './ContactUs.css'
import Image from '../Assets/Logo1.png'
export default function ContactUs() {
  return (
    <div className='Main-B'>
      <div className='Main-B1'>
          <img src={Image} alt='BackDrop'/>
      </div>
      <div className='Main-B2'>
        <div className='C-H'> Contact Us</div>
        <div className='C1'> PH No : +918210501526 </div>
        <div className='C2'> Email : contactus@dehatoz.com</div>
      </div>
    </div>
  )
}
