import React from 'react'
import './ItemListContainer.css'
import ItemCount from './ItemCount'
import { useState } from 'react'


export default function ItemListContainer({producto, descripcion, precio}) {
  return (
    <>
      <div className='itemListContainer mt-10'>
        <img className='itemImg' src="https://picsum.photos/200/300" alt="" />
        <h1 className='itemTittle'>{producto}</h1>
        <h2 className='itemSubtittle'>{descripcion}</h2>
        <p className='itemPrice'>Ars {precio} </p>
        <ItemCount stock= "5" initial ="0"/>
      </div>  
    </>
  )
}
