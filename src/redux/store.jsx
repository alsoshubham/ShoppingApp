import { configureStore } from '@reduxjs/toolkit'
import { CartSlice } from './SLICE/cartSlice'

export const store = configureStore({
  reducer: {
    cart: CartSlice
  },
})