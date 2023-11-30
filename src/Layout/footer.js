import React from 'react'
import './footer.css'
import { Link } from "react-router-dom"
const Footer = () => {
  return (
   <>
    <div className='  footer '>
        <div className='left-footer text-center mt-4'>
        <img src="/logo.svg" alt="Logo "  className='logo go '/>
        <h4 className='mt-3'> 
       All Right Reserved &copy; A3
    </h4>
    <p className='text-center mt-3'>
<Link to='/'>Term For Use</Link>|<Link to='/#sec'>Contact</Link>|<Link to='/'>Privacy Policy</Link>
    </p>
        </div>



        <div className='right-footer'>
  <div className='right1'> 
  <p className='mt-4 hh' >MENU</p>
  <p><Link to='/'>Home</Link></p>
  <p><Link to='/#product'>Product</Link></p>
  <p><Link to='/service'>Service</Link></p>
  <p><Link to='/about'>About</Link></p>
  </div>

  <div className='right2'>
   <p className='mt-4 hh'>FOLLOW US</p>
  <p><Link to='/about'><i class="fa-brands fa-instagram"></i></Link></p>
  <p ><Link to='/about'><i class="fa-brands fa-square-facebook"></i></Link></p>
  <p><Link to='/about'><i class="fa-brands fa-linkedin"></i></Link></p>
  </div>
        </div>



    </div>
   </>

  )
}

export default Footer;