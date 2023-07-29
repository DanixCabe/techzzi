import { useDispatch, useSelector } from "react-redux";
import { BannerSales, SwiperHome, SwiperProducts } from "../../techzzi/components"
import { products } from "../data/products"
import { useBuyCart } from "../hooks";
import { useEffect } from "react";


export const HomePage = () => {
    const dispatch = useDispatch();
    const {unitCart, productsInCart} = useSelector(state => state.techzzi)
    const {productsCart ,setProductCart, setStartProducts, addProductsInCart} = useBuyCart([])
    
    useEffect(() => {
        setStartProducts(productsInCart)
    }, [])

    return (
        <div className=" min-h-full mx-auto justify-center  lg:px-8  1xl:max-w-[1280px] 3xl:max-w-[1440px] mt-8">
            <SwiperHome/>
            <hr className="mx-6 lg:mx-0 opacity-60 my-8"/>
            <SwiperProducts products={products} title='Technology' filterProducts='technologies' addProductsInCart={addProductsInCart}/>
            <hr className="mx-6 lg:mx-0 opacity-60 my-8"/>
            <BannerSales/>
            <hr className="mx-6 lg:mx-0 opacity-60 my-8"/>
            <SwiperProducts products={products} title='Hardware' filterProducts='hardware' addProductsInCart={addProductsInCart}/>
            <hr className="mx-6 lg:mx-0 opacity-60 my-8"/>
            <SwiperProducts products={products} title='Computer Peripherals' filterProducts='computer-peripherals' addProductsInCart={addProductsInCart}/>
            
        </div>
    )
}
