import React from 'react'
import ItemCount from './ItemCount'
import {NavLink, Link} from 'react-router-dom';

export const Item = ({data}) => {
    const {id, tittle , description, price, categoria} = data;
    console.log(data)
  return (
  
  
  <div className="col">
    <div className="card h-100">
      <img src="https://picsum.photos/100/100" className="card-img-top w-50 m-auto mt-1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center">{tittle}</h5>
        <p><strong>Codigo:</strong>{id}</p>
        <p><strong>Categoria:</strong>{categoria}</p>
        <p className="card-text fw-light fs-6">{description}</p>
        <Link to="/itemDetail/" className="card-text fw-light fs-6">Ver mas..</Link>
        <p className='itemPrice fw-bold fs-1 text-center'>Ars {price} </p>
      </div>
      
      <ItemCount stock= {5} initial ={0}/>
      <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>

  
  )
}
