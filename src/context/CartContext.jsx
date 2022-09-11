import { useState, createContext } from "react";

export const CartContest = createContext();

export const CartProvider = ({children}) => {

    const [productCartList, setProductCartList] = useState([]);

    const addProduct = (product) => {
        const newList = [...productCartList, product]
        setProductCartList(newList)
    }

    const deleteProduct = (idProduct) => {
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elem=> elem.id !== id.product)
        setProductCartList(newArray)
    }

}
