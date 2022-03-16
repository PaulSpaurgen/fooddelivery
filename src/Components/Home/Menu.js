import React from 'react'
import Bimg from '../Assets/bvr.jpg';
import './Menu.css'

export default function Menu() {
  return (
    <div className='Container'>
      <div className='Container1'>
        <div className='Mnu-T'><h2>Main Course</h2></div>
        <div className='Menu'>
          <div className='Item-M'>
            <div className='dish-name'> Handi Mutton </div>
            <div className='dish-price'> <strike>589/-</strike>  </div>
            <div className='dish-quantity'> 471/- </div>
            <a href='https://api.whatsapp.com/send?phone=+918210501526'><button>order now</button></a>
          </div>
          <div className='Item-M'>
            <div className='dish-name'> Handi Chicken </div>
            <div className='dish-price'> <strike>369/-</strike> </div>
            <div className='dish-quantity'> 296/-  </div>
            <a href='https://api.whatsapp.com/send?phone=+918210501526'><button>order now</button></a>
          </div>
          <div className='Item-M'>
            <div className='dish-name'> Mutton Dehati </div>
            <div className='dish-price'> <strike>569/-</strike> </div>
            <div className='dish-quantity'> 455/- </div>
            <a href='https://api.whatsapp.com/send?phone=+918210501526'><button>order now</button></a>
          </div>
          <div className='Item-M'>
            <div className='dish-name'> Chicken Dehati </div>
            <div className='dish-price'> <strike>349/-</strike> </div>
            <div className='dish-quantity'> 280/-  </div>
            <a href='https://api.whatsapp.com/send?phone=+918210501526'><button>order now</button></a>
          </div>
        </div>
        <div className='Mnu-T'><h2>Litti Chokha</h2></div>
        <div className='Menu'>
          <div className='Item-M'>
            <div className='dish-name'> Roasted Litti Choka (Plain) </div>
            <div className='dish-price'> <strike>109/-</strike> </div>
            <div className='dish-quantity'> 87/- </div>
            <a href='https://api.whatsapp.com/send?phone=+918210501526'><button>order now</button></a>
          </div>
          <div className='Item-M'>
            <div className='dish-name'> Roasted Litti Choka (Plain) </div>
            <div className='dish-price'> <strike>148/-</strike> </div>
            <div className='dish-quantity'> 118/-  </div>
            <a href='https://api.whatsapp.com/send?phone=+918210501526'><button>order now</button></a>
          </div>
          <div className='Item-M'>
            <div className='dish-name'> Fried sattu Litti Choka</div>
            <div className='dish-price'> <strike>119/-</strike> </div>
            <div className='dish-quantity'> 95/-  </div>
            <a href='https://api.whatsapp.com/send?phone=+918210501526'><button>order now</button></a>
          </div>
          <div className='Item-M'>
            <div className='dish-name'> Fried Aaloo Litti Choka </div>
            <div className='dish-price'><strike>139/-</strike>  </div>
            <div className='dish-quantity'> 112/-  </div>
            <a href='https://api.whatsapp.com/send?phone=+918210501526'><button>order now</button></a>
          </div>
        </div>
        <div className='Mnu-T'><h2>Tawa Roti</h2></div>
        <div className='Menu'>
          <div className='Item-M'>
            <div className='dish-name'> Plain Roti </div>
            <div className='dish-price'> 8/- </div>
            <div className='dish-quantity'> 1pc </div>
            <a href='https://api.whatsapp.com/send?phone=+918210501526'><button>order now</button></a>
          </div>
          <div className='Item-M'>
            <div className='dish-name'> Ghee Roti </div>
            <div className='dish-price'> 11/- </div>
            <div className='dish-quantity'> 1pc </div>
            <a href='https://api.whatsapp.com/send?phone=+918210501526'><button>order now</button></a>
          </div>
        </div>
      </div>
      <div className='Container2'>
        <div className='T-Info'>
          <h2> Authentic   </h2>
          <h2> Flavours From the   </h2>
          <h2> Streets of Bihar At Ur Door Step </h2>
        </div>
        <div className='Caption'>#trynew    #forgottenflavours     #foodForLife   #HighOnStreetFood </div>


        <div className='combo-C'>
          <div className='Mnu-T'> <h2>COMBO OFFERS</h2></div>
          <div className='combo'>
            <div className='Item-N'> Litti Mutton</div>
            <div className='dish-price'><strike>229/-</strike>  </div>
            <div className='Item-P'> 183/-</div>
            <a href='https://api.whatsapp.com/send?phone=+918210501526'><button>order now</button></a>
          </div>
          <div className='combo'>
            <div className='Item-N'> Litti Mutton</div>
            <div className='dish-price'><strike>229/-</strike>  </div>
            <div className='Item-P'> 183/-</div>
            <a href='https://api.whatsapp.com/send?phone=+918210501526'><button>order now</button></a>
          </div>
          <div className='combo'>
            <div className='Item-N'> Litti Murga</div>
            <div className='dish-price'><strike>329/-</strike>  </div>
            <div className='Item-P'> 264/-</div>
            <a href='https://api.whatsapp.com/send?phone=+918210501526'><button>order now</button></a>
          </div>
          <div className='combo'>
            <div className='Item-N'> Roti Mutton</div>
            <div className='dish-price'><strike>289/-</strike>  </div>
            <div className='Item-P'> 231/-</div>
            <a href='https://api.whatsapp.com/send?phone=+918210501526'><button>order now</button></a>
          </div>
          <div className='combo'>
            <div className='Item-N'> Roti Murga</div>
            <div className='dish-price'><strike>189/-</strike>  </div>
            <div className='Item-P'> 152/-</div>
            <a href='https://api.whatsapp.com/send?phone=+918210501526'><button>order now</button></a>
          </div>
          
        </div>
        <div className='BVR'>
          <img src={Bimg} alt="back"></img>
          <div className='cnt'>
            <h2> BEVRAGES @ M.R.P </h2>
          </div>
          
        </div>

      </div>
    </div>

  )
}
