import React from 'react';
import {Link,NavLink} from "react-router-dom"

function Navbar() {
  return (
    <div>
      

   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to="/home" class="navbar-brand" href="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/home" class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link" href="#">About</Link>
        </li>
        <li class="nav-item">
          <Link to="/services" class="nav-link" href="#">
            Services
          </Link>
  
        </li>

      </ul>
 
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar
