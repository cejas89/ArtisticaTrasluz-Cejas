import React from "react";
import { useState } from "react";
import ItemContainer from "./ItemContainer";

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [contador, setContador] = useState(0)

    const agregar = () => {
        if(contador<stock) {
        setContador(contador + 1)
    };
    }

    
    const eliminar = () => {
        if(contador>0) {
            setContador(contador - 1)
    };
    }

    return (
        <>
                <p>Cantidad en stock = {stock}</p>
                <p>Cantidad en stock = {initial}</p>
            <div>
                <button onClick={agregar}>Agregar</button>
                <button onClick={eliminar}>Eliminar</button>
                <p>Los articulos agregados al carrito son: {onAdd}</p>
                <p carrito = "5" >Contador = {contador} </p>
            </div>
        </>
    )



}

export default ItemCount