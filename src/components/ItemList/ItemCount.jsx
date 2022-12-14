import React from "react";
import { useState } from "react";
import "./ItemCount.css";
import Button from "@mui/material/Button";

const ItemCount = ({ initial, onAdd }) => {
  const [count, setCount] = useState(0);

  const agregar = () => {
    console.log(count);
    setCount(count + 1);
  };

  const eliminar = () => {
    console.log(count);
    if (count > 0) {
      setCount(count - 1);
      onAdd(count);
    }
  };

  return (
    <>
      <div className="itemCountContainer">
        <Button variant="contained" color="success" onClick={agregar}>
          +
        </Button>

        <p className="itemCount">{count}</p>

        <Button variant="contained" color="error" onClick={eliminar}>
          -
        </Button>
      </div>
      <div className="btnAgregar">
        <Button
          variant="contained"
          className="m-1"
          onClick={() => {
            onAdd(count);
            setCount(0);
          }}
        >
          Agregar a carrito
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
