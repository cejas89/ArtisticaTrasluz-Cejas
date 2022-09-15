import React, { useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import { Cart } from './Cart';
import { Link } from 'react-router-dom';


export const CartContainer = () => {
const {productCartList} = useContext(CartContext)



  return (
    <>
      {
        (productCartList.length === 0)
     ?(<div>
        <h1>No tienes articulos en el carrito</h1>
        <Link to="/productos">
      <button className='btn btn-outline-success'>
        Regresa a ver los productos!!
      </button>
        </Link>
      </div>)
    :(<div>
    {productCartList.map(p => (
        <Cart key= {p.id} data = {p}/>
    ))}
    </div>)
      }
    </>
  )
}
