import React from 'react'
import lapices from '../../asset/lapices.jpg'
import oleos from '../../asset/oleos.jpg'
import { NavLink } from 'react-router-dom'

export const Categorias = () => {
const card = {
    width: "95%",
    margin: "auto"
}

const container = {
    width: "30%",
    margin: "auto"
}

  return (
<>
    <div className="card m-auto" style={container}  >
            <img src={lapices} className="card-img-top mt-1" style={card} alt="imagen"/>
        <div className="card-body">
            <p className="card-text">Visita nuestro amplio catalogo de productos de libreria</p>
            <NavLink to={`/productos/libreria`} className="card-text fw-light fs-6 text-decoration-none">Ver mas..</NavLink>
        </div>
    </div>

    <div className="card m-auto" style={container}  >
            <img src={oleos} className="card-img-top mt-1" style={card} alt="imagen"/>
        <div className="card-body">
            <p className="card-text">Visita nuestro amplio catalogo de productos de artistica</p>
            <NavLink to={`/productos/artistica`} className="card-text fw-light fs-6 vermas text-decoration-none">Ver mas..</NavLink>
        </div>
    </div>
</>
  )
}
