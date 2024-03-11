import {configureStore, combineReducers} from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import orderReducer from './slices/orderSlice'

const rootReducer = combineReducers({
    productReducer,
    orderReducer,
});
export const store = configureStore({
    reducer: rootReducer,
        
    
})