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
      <button className='cartWidget-container btn btn-outline-success'>
        <BsCartFill/>
        <span>{productosTotal()}</span>
        </button>
        </Link>
        : (
          <div style={{display: "none"}}></div>
        )

    }   
    </>
  )
}
