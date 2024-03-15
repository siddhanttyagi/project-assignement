import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    orders: [
      {
        "id": 3,
        "order_id":23,
        "customer_name": "Siddhant",
        "order_date": "12/02/2024",
        "status": "Shipped",
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://cdn.pixabay.com/photo/2019/04/04/10/47/samsung-4102477_640.jpg",
        "images": [
          "https://i.dummyjson.com/data/products/3/1.jpg"
        ]
      },
      {
        "id": 4,
        "order_id":54,
        "title": "OPPOF19",
        "customer_name": "Vidit",
        "status": "Delivered",
        "order_date": "22/02/2024",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://cdn.pixabay.com/photo/2019/11/23/11/33/mobile-phone-4646854_640.jpg",
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
        "order_id":345,
        "status": "Cancelled",
        "title": "Huawei P30",
        "customer_name": "Mayank",
        "order_date": "1/03/2024",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany ",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://cdn.pixabay.com/photo/2015/01/20/12/51/mobile-605422_640.jpg",
        "images": [
          "https://i.dummyjson.com/data/products/5/1.jpg",
          "https://i.dummyjson.com/data/products/5/2.jpg",
          "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
      },
    ]
}



export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        removeOrder: (state, action) => {
            state.orders = state.orders.filter((order) => order.id !== action.payload )
        },
    }
})

export const {removeOrder} = orderSlice.actions

export default orderSlice.reducer