import { configureStore } from '@reduxjs/toolkit'

import contactReducer from '@/slices/contactSlice'
import homeReducer from '@/slices/homeSlice'

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    home: homeReducer,
  },
})
