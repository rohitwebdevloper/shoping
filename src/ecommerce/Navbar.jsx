import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
 
  return (
    <>   
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <Link class="navbar-brand" to="">E-COMMERCE</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse"  id="collapsibleNavbar">
          <ul class="navbar-nav  ml-auto" >
            <li class="nav-item">
              <Link class="navbar-brand " to="/">HOME</Link>
            </li>
            <li class="nav-item">
              <Link class="navbar-brand" to="/shop">SHOP</Link>
            </li>
            <li class="nav-item">
              <Link class="navbar-brand" to="/cart">Card</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
