import React from 'react'
import './ItemListContainer.css'
import { useState } from 'react'


export default function ItemListContainer({producto, descripcion, stock}) {

  const [stockRestante, setStockRestante] = useState(stock)

  const agregar = () => {
    if (stock > 0)
    setStockRestante(stockRestante + 1)
  }

  const eliminar = () => {
    if (stock <= 0)
    setStockRestante(stockRestante - 1) 
    else {
      alert("no hay mas en stock")
    }
      
  }



  return (
    <>
    
      <div className='itemListContainer'>

        <img src="https://picsum.photos/200/300" alt="" />
        <h1 className='tittle'>Producto:{producto}</h1>
        <h2 className='subtittle'>Descripcion:{descripcion}</h2>
        <p className='text'>Stock {stock}</p>

      <div>
        <button onClick={agregar}>Agregar</button>
        <button onClick={eliminar}>Eliminar</button>

        <p>Los articulos agregados al carrito son: {stockRestante}</p>
      </div>


     </div>
    
    </>
  )
}
