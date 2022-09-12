import React from 'react'
import {BsCartFill} from 'react-icons/bs'
import './CartWidget.css'
import ItemCount from '../ItemList/ItemCount';
import { Link } from '@mui/material';

export default function CartWidget() {
  
  return (
    <>
      <Link to="/carrito">
      <button className='cartWidget-container btn btn-outline-success'>
        <BsCartFill/>
        <a>5</a>
        </button>
        </Link>
    </>
  )
}
