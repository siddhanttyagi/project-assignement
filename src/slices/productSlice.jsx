import {createSlice } from '@reduxjs/toolkit';
import { product_list } from './initialProductData';
const initialState = {
    products: product_list
}



export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            
            state.products.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload )
        },
        editProduct: (state, action) =>{
            state.products = state.products.map((product) => {
                if(product.id === action.payload.id)
                {
                    return action.payload
                }
                return product
            })
        },
    }
})

export const {addProduct, removeProduct, editProduct} = productSlice.actions

export default productSlice.reducer