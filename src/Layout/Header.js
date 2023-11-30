import React from 'react';
import  './header.css'
import { Link} from 'react-router-dom';
const Header = () => {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#"><img src="/logo.svg" alt="Logo"  className='logo'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/service">SERVICES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">PROJECT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">ABOUT</Link>
        </li>
        <button type="button" className="btn btn-primary btnn" >Log In</button>
      </ul>
     
    </div>
  </div>
</nav>


  )
}

export default Header;