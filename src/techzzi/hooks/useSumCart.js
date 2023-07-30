

export const useSumCart = () => {

    const sumPriceCart = (products) => {
        const priceTotalPerProduct = products.reduce((sum, product) => sum + product.price*product.unit,0)
        const usDollar  =  Intl.NumberFormat('en-US',{
            style: 'currency',
            currency: 'USD',
        })


        return usDollar.format(priceTotalPerProduct);
    }

    const sumUnitsCart = (products) => {
        return products.reduce((sum, product) => sum + product.unit,0)
    }

    return {
        sumPriceCart,
        sumUnitsCart
    }
}
