import React, { useState } from "react";
import "./ItemDetail.css"
import ItemCount from "./ItemCount";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {CartContext} from '../../context/CartContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const ItemDetail = ( {data} ) => {
const {addProduct} = useContext(CartContext)
const [value, setValue] = useState(0);
const MySwal = withReactContent(Swal)



const onAdd = (count) => {
  const newProducts = {...data, count}
  setValue(count)
  addProduct(newProducts)
}


  return (
    <>
        <div>
          <h1>Detalle de producto</h1>
          
          <div className="card m-3">
  <div className="row g-0 h-50">
    <div className="col-md-4 h-50">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={data.img} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={data.img} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={data.img} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <div className="col-md-6 h-50">
      <div className="card-body">
        <h5 className="card-title">{data.tittle}</h5>
        <p className="card-text">Codigo:{data.id} </p>
        <p className="card-text">Color: {data.color} </p>
        <p className="card-text">{data.description}</p>

        <div className="d-flex justify-content-between">

        <div>
        <p className="card-text">Procedencia: {data.origen}</p>
        <p className="card-text">Stock disponible: {data.stock}</p>
        <p className="card-text">Categoria: {data.categoria}</p>
        <p className="card-text">SubCategoria: {data.subcategoria} </p>
        </div>

        <div>
        <p className="precio">Precio: ARS {data.price}</p>
        </div>

        <div>
        <ItemCount stock= {5} initial ={0} onAdd= {onAdd}/>
        </div>

        </div>

        <div>
              
        
        { (value !== 0) ?
          <Link to="/carrito" className="btnFinalizarCompra">
        <Button variant="contained" color="success" className="me-2" onClick={()=>
          Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Has agregado con exito ${value} articulos al carrito`,
          showConfirmButton: false,
          timer: 2000
        })}>
          
        Finalizar compra
        </Button>
        </Link>
        :""
        }
        </div>
        <p className="card-text"><small className="text-muted">Tienes {value} agregados al carrito</small></p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  
        
        
      </div>
    </div>
  </div>
</div>
        </div>
      
    </>
  );
};
