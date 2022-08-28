import React, { useState, useEffect } from "react";
import customFetch from "../../utils/customFetch";
import { CircularProgress } from "@mui/material";
import "./ItemDetail.css"



export const ItemDetail = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    customFetch.then((data) => {
      setData(data.find((prod) => prod.color === "blue"));
      setLoading(false);
    });
  }, []);

  console.log(data);

  return (
    <>
      {loading ? (
        <h1>
          Cargando.... <CircularProgress />
        </h1>
      ) : (
        <div>
          <div className="itemListContainer mt-10">
            <img
              className="itemImg"
              src="https://picsum.photos/200/300"
              alt=""
            />
            <h1 className="itemTittle">{data.name}</h1>
            <h2 className="itemSubtittle">{data.tittle}</h2>
            <p>Codigo: {data.id}</p>
            <p>Color: {data.color}</p>
            <p>Descripcion : {data.description}</p>
            <p className="itemPrice">Ars {data.price} </p>
    

          </div>
        </div>
      )}
    </>
  );
};
