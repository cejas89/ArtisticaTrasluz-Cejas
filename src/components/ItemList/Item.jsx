import React from 'react'
import ItemCount from './ItemCount'
import "./ItemListContainer.css";

export const Item = ({data}) => {
const {id, name, color, tittle , price} = data;

  return (
    <>

    
    <div className='itemListContainer mt-10'>
      <img className='itemImg' src="https://picsum.photos/200/300" alt="" />
      <h1 className='itemTittle'>{name}</h1>
      <h2 className='itemSubtittle'>{tittle}</h2>
      <p>Codigo: {id}</p>
      <p>Color: {color}</p>
      <p className='itemPrice'>Ars {price} </p>
      <ItemCount stock= {5} initial ={0}/>
    </div>  
    
  </>
  )
}
