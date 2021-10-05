import { configureStore } from '@reduxjs/toolkit'

import contactReducer from '@/slices/contactSlice'
import historyReducer from '@/slices/historySlice'
import homeReducer from '@/slices/homeSlice'

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    history: historyReducer,
    home: homeReducer,
  },
})
