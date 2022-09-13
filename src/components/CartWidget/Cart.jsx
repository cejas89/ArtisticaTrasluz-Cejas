import React from "react";
import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Cart = ({ data }) => {
  const { removeProduct, vaciarCarrito, isInCart } = useContext(CartContext);

  return (
    <>
      <div>
        <h1>Carrito de Compras</h1>
        <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
        <div className="card m-3">
          <div className="row g-0 h-50">
            <div className="col-md-4 h-50">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="true"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://picsum.photos/200/200?random=1"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://picsum.photos/200/200?random=2"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://picsum.photos/200/200?random=3"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-6 h-50">
              <div className="card-body">
                <h5 className="card-title">{data.tittle}</h5>
                <p className="card-text">Codigo:{data.id} </p>
                <p className="card-text">Color: {data.color} </p>
                <p className="card-text">{data.description}</p>

                <div className="d-flex justify-content-between">
                  <div>
                    <p className="card-text">Procedencia: {data.origen}</p>
                    <span className="card-text">
                      <strong>Stock disponible: {data.stock} </strong>
                    </span>
                    <p className="card-text">Categoria: {data.categoria}</p>
                    <p className="card-text">
                      SubCategoria: {data.subcategoria}{" "}
                    </p>
                    <p className="card-text">Cantidad: {data.count}</p>
                    <p className="card-text">
                      Precio por unidad: ${data.price}{" "}
                    </p>
                    <p className="card-text">
                      Precio total compra: ${data.precioTotal}{" "}
                    </p>
                  </div>
                </div>
                <button className="m-1 w-30">
                  Finalizar Compra
                </button>

                <button onClick={() => removeProduct(data.id)} className="m-1 w-30">
                  Eliminar producto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
