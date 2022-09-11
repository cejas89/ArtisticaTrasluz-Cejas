import React from 'react'
import {BsCartFill} from 'react-icons/bs'
import './CartWidget.css'
import ItemCount from '../ItemList/ItemCount';

export default function CartWidget({carrito}) {
  console.log(carrito);
  return (
    <>
        <div className='cartWidget-container btn btn-outline-success'>
        <BsCartFill/>
        <a>{carrito}</a>
        </div>
    </>
  )
}
