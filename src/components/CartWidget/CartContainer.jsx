import React, { useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import { Cart } from './Cart';
import { Link } from 'react-router-dom';


export const CartContainer = () => {
const {productCartList, vaciarCarrito} = useContext(CartContext)



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
      <div className="d-flex justify-content-around">
        <h1>Carrito de Compras</h1>
        <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
        </div>
    {productCartList.map(p => (
        <Cart key= {p.id} data = {p}/>
    ))}
    </div>)
      }
    </>
  )
}
