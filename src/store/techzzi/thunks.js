import { checkSaving, deleteProductCart, incrementUnitCart, updateAddUnitCart, updateDecrementUnitCart } from "./techzziSlice";


export const startAddProduct = (products) => {
    return async (dispatch, getState) => {
        const {productsInCart} = getState().techzzi;
        const productCurrent = {...products, unit: 1}
        let encountered = 0;
        let validate = false
        if (productsInCart.length === 0) dispatch(incrementUnitCart({productCurrent}));

        productsInCart.forEach((product, index) => {
            if(product.id === products.id && encountered === 0){
                encountered += 1;
                dispatch(updateAddUnitCart(products.id))
                validate = false;
            }else if (product.id !== products.id && encountered === 0){
                validate = true;
            }
        });
        if(validate) dispatch(incrementUnitCart({productCurrent}));
 
    }

}

export const startIncrementProduct = (idProduct) => {
    return async (dispatch, getState) => {
        const {productsInCart} = getState().techzzi;
        productsInCart.forEach((product, index) => {
            if(product.id === idProduct ){
                dispatch(updateAddUnitCart(idProduct))
            }
        });
    }
}

export const startDecrementUnitCart = (idProduct) => {
    return async (dispatch, getState) => {
        const {productsInCart} = getState().techzzi;
        productsInCart.forEach((product, index) => {
            if(product.id === idProduct ){
                dispatch(updateDecrementUnitCart(idProduct))
            }
        });
    }
}

export const startDeleteProductCart = (idProduct) => {
    return async (dispatch) => {
        dispatch(deleteProductCart(idProduct))
    }
}

export const startLoading = () => {
    return async (dispatch) => {
        dispatch(checkSaving())
    }
}
