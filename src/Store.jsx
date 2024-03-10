import {configureStore, combineReducers} from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import orderReducer from './slices/orderSlice'

const rootReducer = combineReducers({
    todoReducer,
    orderReducer,
});
export const store = configureStore({
    reducer: rootReducer,
        
    
})