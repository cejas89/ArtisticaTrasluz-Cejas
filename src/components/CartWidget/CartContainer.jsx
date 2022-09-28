import React, { useContext, useState } from "react";
import empty_1 from "../../asset/cart-img/empty_1.webp";
import empty_2 from "../../asset/cart-img/empty_2.png";
import { CartContext } from "../../context/CartContext";
import { Cart } from "./Cart";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

export const CartContainer = () => {
  const { productCartList, vaciarCarrito, preciosTotal } =
    useContext(CartContext);
  const [idOrden, setIdOrden] = useState("");

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
          <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
          {productCartList.map((p) => (
            <Cart key={p.id} data={p} />
          ))}

          <div>
            <h1 className="text-center">
              Precios total del carrito: ${preciosTotal()}
            </h1>
          </div>
          <div>
            <form onSubmit={enviarOrden}>
              <label className="m-2" htmlFor="" required>Ingresa tu Nombre: </label>
              <input type="text" placeholder="nombre" /><br/>
              <label className="m-2" htmlFor="">Ingresa tu Direccion: </label>
              <input type="text" placeholder="direccion" /><br/>
              <label className="m-2" htmlFor="">Ingresa tu Telefono: </label>
              <input type="text" placeholder="telefono" /><br/>
              <label className="m-2" htmlFor="">Ingresa tu Email: </label>
              <input type="email" placeholder="email" /><br/>
              <button type="submit">Enviar</button>
            </form>

            {idOrden ? <p>Su orden ha sido registrada con el id <strong>{idOrden}</strong></p> : ""}
          </div>
        </div>
      )}
    </>
  );
};
