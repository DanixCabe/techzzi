import { createSlice } from '@reduxjs/toolkit';

    export const techzziSlice = createSlice({
        name: 'techzzi',
        initialState: {
            unitCart: (!!JSON.parse(localStorage.getItem('unitCart'))) ? parseInt(localStorage.getItem('unitCart')) : 0,
            productsInCart: (!!JSON.parse(localStorage.getItem('cart'))) ? JSON.parse(localStorage.getItem('cart')) : [],
            isSaving: false,
        },
        reducers: {
            incrementUnitCart: (state, action) => {
                state.productsInCart.push(action.payload.productCurrent);
                state.unitCart += 1;
                state.isSaving = false;
                localStorage.setItem('cart', JSON.stringify(state.productsInCart));
                localStorage.setItem('unitCart', state.unitCart);

            },
            updateDecrementUnitCart: (state, action) => {
                state.productsInCart.map(product => {
                    if (product['id'] === action.payload){
                        product['unit'] = product['unit']-1;
                        state.unitCart -= 1;
                    }
                });
                state.isSaving = false;
                localStorage.setItem('cart', JSON.stringify(state.productsInCart));
                localStorage.setItem('unitCart', state.unitCart);
            },
            updateAddUnitCart: (state, action) => {
                state.productsInCart.map(product => {
                    if (product['id'] === action.payload){
                        product['unit'] = product['unit']+1;
                        state.unitCart += 1;
                    }
                });
                state.isSaving = false;
                localStorage.setItem('cart', JSON.stringify(state.productsInCart));
                localStorage.setItem('unitCart', state.unitCart);
            },
            deleteProductCart: (state, action) => {
                state.productsInCart = state.productsInCart.filter(product => product.id !== action.payload)
                state.isSaving = false;
                localStorage.setItem('cart', JSON.stringify(state.productsInCart));
                localStorage.setItem('unitCart', state.unitCart);
            },
            checkSaving : (state) => {
                state.isSaving = true;
            }
        }
});
// Action creators are generated for each case reducer function
export const { incrementUnitCart, updateDecrementUnitCart, checkSaving, updateAddUnitCart, deleteProductCart } = techzziSlice.actions;