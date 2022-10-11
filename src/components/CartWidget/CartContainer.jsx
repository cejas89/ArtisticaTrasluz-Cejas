import React, { useContext, useState } from "react";
import empty_1 from "../../asset/cart-img/empty_1.webp";
import empty_2 from "../../asset/cart-img/empty_2.png";
import { CartContext } from "../../context/CartContext";
import { Cart } from "./Cart";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { Button } from "@mui/material";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const CartContainer = () => {
  const { productCartList, vaciarCarrito, preciosTotal } =
    useContext(CartContext);
  const [idOrden, setIdOrden] = useState("");
  const MySwal = withReactContent(Swal)

  const enviarOrden = (e) => {
    e.preventDefault();
    const ordenDeCompra = {
      comprador: {
        nombre: e.target[0].value,
        direccion: e.target[1].value,
        telefono: e.target[2].value,
        email: e.target[3].value,
      },
      items: {
        items: productCartList,
        precioTotal: preciosTotal(),
      },
    };
    const query = collection(db, "ordenes");
    addDoc(query, ordenDeCompra).then((respuesta) => setIdOrden(respuesta.id));

    console.log("el id de la compra es", idOrden);
  };

  return (
    <>
      {productCartList.length === 0 ? (
        <>
          <img src={empty_2} alt="" className="rounded mx-auto d-block" />
          <div>
            <Link to="/productos">
              <button className="btn btn-outline-success mx-auto d-block mt-0">
                Regresa a ver los productos!!
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div>
          <h1>Carrito de Compras</h1>

          {idOrden ? <p>Su orden ha sido registrada con el id <strong>{idOrden}</strong></p> 
          
          :
          <div className="d-flex w-100">

          <div className="w-35">
          {productCartList.map((p) => (
            <Cart key={p.id} data={p} />
          ))}

          </div>
  
          <div className="w-100 border mb-5">
            <h1 className="text-center">Ingresa tus datos para generar la orden</h1>
            <form onSubmit={enviarOrden} className="border">
              <label className="m-2" htmlFor="" required>Nombre: </label>
              <input type="text" placeholder="nombre" /><br/>
              <label className="m-2" htmlFor="">Direccion: </label>
              <input type="text" placeholder="direccion" /><br/>
              <label className="m-2" htmlFor="">Telefono: </label>
              <input type="text" placeholder="telefono" /><br/>
              <label className="m-2" htmlFor="">Email: </label>
              <input type="email" placeholder="email" /><br/>
              <Button type="submit" variant="contained" color="success" className="me-1">
                  Enviar
                  
              </Button>
              
              <Button onClick={() => 
                  MySwal.fire({
                  title: 'Estas seguro que deseas vaciar el carrito???',
                  text: "",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si, vacialo!'
                 }).then((result) => {
                  if (result.isConfirmed) {
                    vaciarCarrito()
                    MySwal.fire(
                      'Eliminado!',
                      'El carrito ha sido vaciado con exito.',
                      'success'
                    )
                  }
                })
                  } variant="contained" color="error">
                  Vaciar carrito
                </Button>
            </form>

            <div className="d-flex justify-content-around mt-5">
            <h1 className="text-center">
              Precios total del carrito: ${preciosTotal()}




            </h1>
          </div>

          
          </div>
          </div> }




        </div>
      )}
    </>
  );
};
