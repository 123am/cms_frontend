import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import authReducer from './reducers/auth-reducer';
import dataReducer from './reducers/data-reducer';



export const store = configureStore({
    reducer: {
        auth:authReducer,
        data:dataReducer
    },
})