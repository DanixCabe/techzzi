import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startAddProduct } from "../../store/techzzi";

export const useBuyCart = (initialproducts) => {
    const [productsCart, setProductCart] = useState([])

    
    useEffect(() => {
        const productsInitial  = JSON.parse(localStorage.getItem('cart'));
        setStartProducts(productsInitial)
    }, [])
    


    const setStartProducts = (products) => {
        setProductCart(products)
    }

    const addProductsInCart = (product) => {
        setProductCart(productsCart.concat(product));
    }


    return {
        productsCart,
        setProductCart,
        addProductsInCart,
        setStartProducts,
    }
}
