import React from 'react'
import './ItemListContainer.css'
import { useState } from 'react'


export default function ItemListContainer({producto, descripcion, precio}) {
  return (
    <>
    
      <div className='itemListContainer'>

        <img src="https://picsum.photos/200/300" alt="" />
        <h1 className='tittle'>Producto:{producto}</h1>
        <h2 className='subtittle'>Descripcion:{descripcion}</h2>
        <p className='text'>precio: {precio} </p>

     </div>
    
    </>
  )
}
