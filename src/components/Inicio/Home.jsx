import React from 'react'
import { Categorias } from './Categorias'
import sale6 from '../../asset/banner/sale6.jpg'
import sale7 from '../../asset/banner/sale7.jpg'
import sale8 from '../../asset/banner/sale8.jpg'



export const Home = () => {

  const carousel = {
		width: "800px",
    heigth: "auto"
  }
    
  return (

    <>
    <div id="carouselExampleControls" className="carousel slide w-50 m-auto" data-bs-ride="carousel">
  <div className="carousel-inner mt-4">
    <div className="carousel-item active">
      <img src={sale6} className="d-block m-auto rounded-2" style={carousel} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={sale8}className="d-block m-auto rounded-2" style={carousel} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={sale7} className="d-block m-auto rounded-2" style={carousel} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev btn-primary" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next btn-primary" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
</div>
<h1 className='mt-4'>Categorias</h1>
<hr/>
<div className='d-flex mt-4'>
<Categorias/>
</div>
  </>
  
)
}
