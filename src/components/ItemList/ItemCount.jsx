import React from "react";
import { useState } from "react";
import ItemContainer from "./ItemContainer";

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [contador, setContador] = useState(0)
    const [stockRestante, setStockRestante] = useState(stock) 

    const agregar = () => {
        if(contador<stock) {
            setContador(contador + 1)
            setStockRestante((stock - 1) - contador)
        
        alert("has agregado con exito el articulo")
    };
    }

    
    const eliminar = () => {
        if(contador>0) {
            alert("desea eliminar el articulo del carrito")
            setContador(contador - 1)
            //setStockRestante(contador - 1)
    };
    }

    

    return (
        <>
                {
                    stock>0 ?
                    <p>Cantidad en stock = {stockRestante}</p>
                    :
                    <p>Cantidad en stock = {stockRestante}</p>
                }
                
                
            <div>
                <button onClick={agregar}>Agregar</button>
                <button onClick={eliminar}>Eliminar</button>

                {
                    contador>0 ?
                    <p>Tienes {contador} articulos cargado al carrito</p>
                    :
                    <p>No tienes ningun articulo cargado al carrito</p>
                }

            </div>
        </>
    )



}

export default ItemCount