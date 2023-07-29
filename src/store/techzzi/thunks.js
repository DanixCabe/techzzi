import { incrementUnitCart } from "./techzziSlice";


export const startAddProduct = (products) => {
    return async (dispatch, getState) => {
        dispatch(incrementUnitCart({products}))
    }

}
