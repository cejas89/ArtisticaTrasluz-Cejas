import React, { useState, useEffect } from "react";
import customFetch from "../../utils/customFetch";
import { CircularProgress } from "@mui/material";
import "./ItemDetail.css"
import ItemCount from "./ItemCount";

export const ItemDetail = ( {data} ) => {
const {id, tittle} = data;
console.log(data);
  

  return (
    <>
         <div>
          <h1>Item Detail container</h1>
          
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
      <img src="https://picsum.photos/200/200?random=1" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://picsum.photos/200/200?random=2" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://picsum.photos/200/200?random=3" className="d-block w-100" alt="..."/>
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
        <span className="card-text"><strong>Stock disponible: {data.stock} </strong></span>
        <p className="card-text">Categoria: {data.categoria}</p>
        <p className="card-text">SubCategoria: {data.subcategoria} </p>
        </div>

        <div>
        <ItemCount stock= {5} initial ={0}/>
        </div>

        </div>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        
      </div>
    </div>
  </div>
</div>
        </div>
      
    </>
  );
};
