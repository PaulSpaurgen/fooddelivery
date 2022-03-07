import React from 'react'
import MuttonH from '../Assets/HandiM.jpg'
import ChickenH from '../Assets/HandiC.jpg'
import MuttonD from '../Assets/DehatiM.jpg'
import ChickenD from '../Assets/DehatiC.jpg'
import littiR   from '../Assets/LittiC.jpg'
import FlittiS  from '../Assets/FLittiC.jpg'
import FlittiA  from '../Assets/FAlooLittiChokha.webp'
import P_Rotti   from '../Assets/RottiP.jpg'
import G_Rotti   from '../Assets/GRotti.webp'
import LittiM    from  '../Assets/Litti+Mutton.jpg'
import LittiC    from   '../Assets/Litti+Murga.jpg'
import RottiC    from  '../Assets/Roti+Chicken.webp'
import RottiM    from   '../Assets/Roti+Mutton.jpg'
import './Menu.css'

export default function Menu() {
  return (
    <div className='Container2'>
      <div className='heading'><h2>Main Course</h2></div>
        <div className='menu'>
          <div className='dish'>
            <img src={MuttonH} alt='mutton Handi'></img>
            <p className='dish-name'> Mutton Handi</p>
            <p> Price: 471/-</p>
            <p> quantity: 250gm</p>
            <button>Order Now</button>
          </div>
          <div className='dish'>
            <img src={ChickenH} alt='Chicken Handi'></img>
            <p className='dish-name'> Chicken Handi</p>
            <p> Price: 296/-</p>
            <p> quantity: 250gm</p>
            <button>Order Now</button>
          </div>
          <div className='dish'>
            <img src={MuttonD} alt='mutton dehati'></img>
            <p className='dish-name'> Mutton Dehati</p>
            <p> Price: 455/-</p>
            <p> quantity: 250gm</p>
            <button>Order Now</button>
          </div>
          <div className='dish'>
            <img src={ChickenD} alt='Chicken dehati'></img>
            <p className='dish-name'> Chicken Dehatii</p>
            <p> Price: 280/-</p>
            <p> quantity: 250gm</p>
            <button>Order Now</button>
          </div>
        </div>
        <div className='heading'><h2>Litti Choka</h2></div>
        <div className='menu'>
          <div className='dish'>
            <img src={littiR} alt='litti choka'></img>
            <p className='dish-name'> Rosted Litti Choka (Plain)</p>
            <p> Price: 87/- </p>
            <p> quantity: 250gm</p>
            <button>Order Now</button>
          </div>
          <div className='dish'>
            <img src={littiR} alt='litti choka'></img>
            <p className='dish-name'> Rosted Litti Choka (Ghee)</p>
            <p> Price: 118/- </p>
            <p> quantity: 250gm</p>
            <button>Order Now</button>
          </div>
          <div className='dish'>
            <img src={FlittiS} alt='Fried Litti C'></img>
            <p className='dish-name'> Fried Sattu Litti with chutney </p>
            <p> Price: 95/-</p>
            <p> quantity: 250gm</p>
            <button>Order Now</button>
          </div>
          <div className='dish'>
            <img src={FlittiA} alt='Fried Litti C'></img>
            <p className='dish-name'>Fried Aaloo Litti with chutney </p>
            <p> Price:112/- </p>
            <p> quantity: 250gm</p>
            <button>Order Now</button>
          </div>
        </div>
        <div className='heading'><h2>Tawa Rotti</h2></div>
        <div className='menu'>
          <div className='dish'>
            <img src={P_Rotti} alt='rotii'></img>
            <p className='dish-name'> Roti (Plain)</p>
            <p> Price: 8/- pc </p>
            <p> quantity: W.R.Order</p>
            <button>Order Now</button>
          </div>
          <div className='dish'>
            <img src={G_Rotti} alt='Rotti'></img>
            <p className='dish-name'> Roti (Ghee)</p>
            <p> Price: 11/- pc </p>
            <p> quantity: W.R.Order</p>
            <button>Order Now</button>
          </div>
        </div>
        <div className='heading'><h2>COMBOS</h2></div>
        <div className='menu'>
          <div className='dish'>
            <img src={LittiC} alt='litti choka'></img>
            <p className='dish-name'> Murga Litti</p>
            <p> Price: 264/- </p>
            <p> quantity: 250gm</p>
            <button>Order Now</button>
          </div>
          <div className='dish'>
            <img src={LittiM} alt='litti choka'></img>
            <p className='dish-name'> Litti Mutton</p>
            <p> Price: 183/- </p>
            <p> quantity: 250gm</p>
            <button>Order Now</button>
          </div>
          <div className='dish'>
            <img src={RottiM} alt='Fried Litti C'></img>
            <p className='dish-name'> Roti + Mutton curry </p>
            <p> Price: 231/-</p>
            <p> quantity: 250gm</p>
            <button>Order Now</button>
          </div>
          <div className='dish'>
            <img src={RottiC} alt='Fried Litti C'></img>
            <p className='dish-name'> Roti + Chicken Curry </p>
            <p> Price:152/- </p>
            <p> quantity: 250gm</p>
            <button>Order Now</button>
          </div>
        </div>
      </div>
  )
}
