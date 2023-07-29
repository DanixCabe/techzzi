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
                state.productsInCart.push(action.payload.products);
                state.unitCart += 1;
                state.isSaving = false;
                localStorage.setItem('cart', JSON.stringify(state.productsInCart));
                localStorage.setItem('unitCart', state.unitCart);
                

            },
            decrementUnitCart: (state) => {
                state.unitCart -= 1;
            },
            checkSaving : (state) => {
                state.isSaving = true
            }
        }
});
// Action creators are generated for each case reducer function
export const { incrementUnitCart, decrementUnitCart, checkSaving } = techzziSlice.actions;