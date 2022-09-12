import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState([]);

    const addProduct = (product, qty) => {
        const newList = [...productCartList, product]
        setProductCartList(newList)

         if (isInCart(product.id)) {
            const productIndex = productCartList.findIndex(product=> product.id === product.id);
            newList[productIndex].cantidad = newList[productIndex].cantidad + 5;
            setProductCartList(newList)
        } else {
            const newList = [...productCartList, product]
            setProductCartList(newList)
        }
    }

    
    const isInCart = (id) => {
        const elementExsist = productCartList.some((elem)=> elem.id === id);
        console.log(elementExsist)
        return elementExsist;
    }


    const removeProduct = (idProduct) => {
        console.log(idProduct)
       const copyArray = [...productCartList];
      const newArray = copyArray.filter(elem=> elem.id !== idProduct)
     setProductCartList(newArray)
    }

    const vaciarCarrito = () => {
        setProductCartList([]);
        alert("El carrito ha sido vaciado")
    }


    return (
        <CartContext.Provider value={{productCartList, addProduct, removeProduct, vaciarCarrito, isInCart}}>
            {children}
        </CartContext.Provider> 
        
    )

}
