import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productCartList, setProductCartList] = useState([]);

  const addProduct = (product, count) => {
    const newList = [...productCartList, product];
    

    //   setProductCartList(newList)

    if (isInCart(product.id)) {
      const productIndex = productCartList.findIndex(
        (product) => product.id === product.id
      );
      newList[productIndex].count = newList[productIndex].count + product.count;
      newList[productIndex].precioTotal = newList[productIndex].count * product.price;
     
    } else {
      const newList = [...productCartList, product];
      setProductCartList(newList);
      console.log(newList);
      
    }
  };

  const isInCart = (id) => {
    const elementExsist = productCartList.some((elem) => elem.id === id);
    return elementExsist;
  };

  const removeProduct = (idProduct) => {
    console.log(idProduct);
    const copyArray = [...productCartList];
    const newArray = copyArray.filter((elem) => elem.id !== idProduct);
    setProductCartList(newArray);
  };

  const vaciarCarrito = () => {
    setProductCartList([]);
    alert("El carrito ha sido vaciado");
  };

  const productosTotal = () => {
    const totalProductos = productCartList.reduce((acu, product) => acu + product.count, 0  )
    if (totalProductos === 0) {
      return ("")
    } else {
      return totalProductos;
    }
    
  }

  return (
    <CartContext.Provider
      value={{
        productCartList,
        addProduct,
        removeProduct,
        vaciarCarrito,
        isInCart,
        productosTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
