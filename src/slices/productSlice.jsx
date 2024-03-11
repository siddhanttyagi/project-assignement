import {createSlice, nanoid } from '@reduxjs/toolkit';
import { product_list } from './initialProductData';
const initialState = {
    products: product_list
}



export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = {
                id: nanoid(), 
                text: action.payload
            }
            state.products.push(product)
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload )
        },
    }
})

export const {addProduct, removeProduct} = productSlice.actions

export default productSlice.reducer