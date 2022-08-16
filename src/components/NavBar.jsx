import React from "react";
import logo from '../asset/logo.jpg'
import NavBar from './NavBar.css'

export default function navBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand w-auto container-logo" href="#"><img className = "logo" src={logo} alt="" width="60" height="60"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Carrito</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ofertas</a>
        </li>        
        <li className="nav-item">
          <a className="nav-link" href="#">Contactanos</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar..</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
}
