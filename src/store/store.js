import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import todoReducer from './slices/todoSlice';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
    counter: counterReducer,
  },
});