import React, { useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import { Cart } from './Cart';

export const CartContainer = () => {
const {productCartList} = useContext(CartContext)



  return (

    <div>
    {productCartList.map(p => (
        <Cart key= {p.id} data = {p}/>
    ))}
    </div>
  )
}
