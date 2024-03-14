import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    orders: [
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": [
              "https://i.dummyjson.com/data/products/4/1.jpg",
              "https://i.dummyjson.com/data/products/4/2.jpg",
              "https://i.dummyjson.com/data/products/4/3.jpg",
              "https://i.dummyjson.com/data/products/4/4.jpg",
              "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
            ]
          },
          {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            "images": [
              "https://i.dummyjson.com/data/products/5/1.jpg",
              "https://i.dummyjson.com/data/products/5/2.jpg",
              "https://i.dummyjson.com/data/products/5/3.jpg"
            ]
          },
          {
            "id": 6,
            "title": "MacBook Pro",
            "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "price": 1749,
            "discountPercentage": 11.02,
            "rating": 4.57,
            "stock": 83,
            "brand": "Apple",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
            "images": [
              "https://i.dummyjson.com/data/products/6/1.png",
              "https://i.dummyjson.com/data/products/6/2.jpg",
              "https://i.dummyjson.com/data/products/6/3.png",
              "https://i.dummyjson.com/data/products/6/4.jpg"
            ]
          },
    ]
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