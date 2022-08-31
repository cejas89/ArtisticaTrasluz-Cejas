import React from 'react'
import ItemCount from './ItemList/ItemCount'

export const Prueba = ({data}) => {
    const {id, tittle , description, price} = data;
    console.log(data)
  return (
  
  
  <div className="col">
    <div className="card h-100">
      <img src="https://picsum.photos/100/100" className="card-img-top w-50 m-auto mt-1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center">{tittle}</h5>
        <p><strong>Codigo: </strong>{id}</p>
        <p className="card-text fw-light fs-6">{description}</p>
        <p className='itemPrice'>Ars {price} </p>
      </div>
      
      <ItemCount stock= {5} initial ={0}/>
      <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>

  
  )
}
