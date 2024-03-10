import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    orders: [{id: 1, text: "Hello world"}]
}



export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            const order = {
                id: nanoid(), 
                text: action.payload
            }
            state.orders.push(order)
        },
        removeOrder: (state, action) => {
            state.orders = state.orders.filter((order) => order.id !== action.payload )
        },
    }
})

export const {addOrder, removeOrder} = orderSlice.actions

export default orderSlice.reducer