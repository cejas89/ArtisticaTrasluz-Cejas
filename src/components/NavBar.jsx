import React from "react";
import logo from '../asset/logo.jpg'
import CartWidget from "./CartWidget/CartWidget";
import './NavBar.css'
import {NavLink, Link} from 'react-router-dom';
import { Cart } from "./CartWidget/Cart";


export default function navBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light sticky-top ">
  <div className="container-fluid">
    <Link to="/"><a className="navbar-brand w-auto container-logo" href="#"><img className = "logo rounded-circle" src={logo} alt="" width="60" height="60"/></a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between ul-container">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/productos">Productos</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/productos/libreria">Libreria</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="/productos/artistica">Artistica</NavLink></li>
            
            
          </ul>
        </li>
        <li className="nav-item">
        <Link to="/carrito" className="nav-link">Carrito</Link>
        </li>

        {
        <li className="nav-item">
          <a className="nav-link" href="#">Ofertas</a>
        </li> 
        }       
        <li className="nav-item">
          <Link to="/contacto" className="nav-link">Contactanos</Link>
        </li>
      </ul>
      
   

        <Link to="/carrito" className="nav-link"><CartWidget/></Link>

    
    </div>
  </div>
</nav>
    </>
  );
}
