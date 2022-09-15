import React, { useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import { Cart } from './Cart';

export const CartContainer = () => {
const {productCartList} = useContext(CartContext)



  return (
    <>
      {
        (productCartList.length === 0)
        ? (<h1>No tienes articulos en el carrito</h1>)
        :
    (<div>
    {productCartList.map(p => (
        <Cart key= {p.id} data = {p}/>
    ))}
    </div>)
      }
    </>
  )
}
