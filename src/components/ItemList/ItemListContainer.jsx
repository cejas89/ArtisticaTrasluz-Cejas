import React from 'react'
import './ItemListContainer.css'

export default function ItemListContainer(props) {

const saludo = props.greeting
const numero = props.number

  return (
    <>
    
      <div className='itemListContainer'>
        <h1 className='tittle'>Primer texto solicitado: {saludo}</h1>
        <h2 className='subtittle'>Segundo texto solicitado:{props.another}</h2>
        <p className='text'>Tercer texto solicitado: {numero}</p>
     </div>
    
    </>
  )
}
