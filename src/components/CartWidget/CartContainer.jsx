import React, { useContext } from 'react'
import empty_1 from '../../asset/cart-img/empty_1.webp'
import empty_2 from '../../asset/cart-img/empty_2.png'
import {CartContext} from '../../context/CartContext'
import { Cart } from './Cart';
import { Link } from 'react-router-dom';
import { db } from '../../utils/firebase'
import {collection, addDoc, doc, updateDoc} from "firebase/firestore";

export const CartContainer = () => {
const {productCartList, vaciarCarrito, preciosTotal} = useContext(CartContext)


const enviarOrden = (e) => {
  e.preventDefault();
    const ordenDeCompra = {
    comprador: {
      nombre: e.target[0].value,
      direccion: e.target[1].value,
      telefono: e.target[2].value,
      email: e.target[3].value
    }, items:{ 
      items: productCartList,
      precioTotal: preciosTotal()
    }
}
      const query = collection(db, "ordenes");
      addDoc(query, ordenDeCompra).then((respuesta=> console.log(respuesta)))
    
      console.log(ordenDeCompra)

    }

  return (
    <>
      {
        (productCartList.length === 0)
     ?
     (<>
        <img src={empty_2} alt="" className="rounded mx-auto d-block"/>
        <div>
        <Link to="/productos">
      <button className='btn btn-outline-success mx-auto d-block mt-0'>
        Regresa a ver los productos!!
      </button>
        </Link>
        </div>
        </>)
    :
    (<div>
      <div className="d-flex justify-content-around">
        <h1>Carrito de Compras</h1>
        <p>Precios total del carrito: ${preciosTotal()}</p>
        <div>
          <form onSubmit={enviarOrden}>
              <input type="text" placeholder='nombre'/>
              <input type="text" placeholder='direccion' />
              <input type="text" placeholder='telefono'/>
              <input type="email" placeholder='email'/>
              <button type='submit'>Enviar</button>
          </form>
        </div>
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
