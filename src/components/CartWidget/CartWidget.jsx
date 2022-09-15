import React, { useContext } from 'react'
import {BsCartFill} from 'react-icons/bs'
import './CartWidget.css'
import ItemCount from '../ItemList/ItemCount';
import { Link } from '@mui/material';
import { CartContext } from '../../context/CartContext';

export default function CartWidget() {
  const {productCartList, productosTotal} = useContext(CartContext)
  
  return (
    <>
    
    {  (productCartList.length > 0) ?
      <Link to="/carrito">
        <div className='d-flex w-20 sticky-top'>
      <button className='cartWidget-container btn btn-outline-success d-flex w-100 sticky-top'>
        <BsCartFill/>
        <span className='text-center'>{productosTotal()}</span>
        </button>
        </div>
        </Link>
        : (
          <div style={{display: "none"}}></div>
        )

    }   
    </>
  )
}
