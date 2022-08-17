import React from 'react'
import {BsCartFill} from 'react-icons/bs'
import './CartWidget.css'

export default function CartWidget() {
  return (
    <>
        <div className='cartWidget-container btn btn-outline-success'>
        <BsCartFill/>
        <a> 4 </a>
        </div>
    </>
  )
}
