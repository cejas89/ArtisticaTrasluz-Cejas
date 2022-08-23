import React from "react";
import ItemListContainer from "./ItemListContainer";

export default function ItemContainer() {
  return (
    <div style={{
        display: "flex",
        background: "cian"
      }}>
      <ItemListContainer
        producto="Producto1"
        descripcion="Este es el segundo texto, Este es el segundo texto"
        precio="150.00"
      />
      <ItemListContainer
        producto="Producto2"
        descripcion="Este es el segundo texto"
        precio="150.00"
      />
            <ItemListContainer
        producto="Producto3"
        descripcion="Este es el segundo texto"
        precio="150.00"
      />
    </div>
  );
}
