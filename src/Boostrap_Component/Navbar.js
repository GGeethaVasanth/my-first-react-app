import React from 'react'
import "../Boostrap_Component/style/navbar.css"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a className="title" class="navbar-brand" href="#">Meesho</a>

    <form class="d-flex" role="search">
        <input className="searchbox" class="form-control me-4" type="search" placeholder="Try Saree Kurti or Search by Product Code" aria-label="Search"/>
        
      </form>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="navtext">
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Download App</a>
            </li>
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Become a Supplier</a>
            </li>
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Profile</a>
            </li>
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Cart</a>
            </li>
        
        </ul></div>
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      
      </div>
  </div>
</nav>



  )
}

export default Navbar