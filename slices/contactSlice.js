import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  message: '',
  step: 'email',
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setMessage: (state, action) => {
      state.message = action.payload
    },
    setStep: (state, action) => {
      state.step = action.payload
    }
  }
})

export const {
  setEmail,
  setMessage,
  setStep,
} = contactSlice.actions

export const selectEmail = (state) => state.contact.email
export const selectMessage = (state) => state.contact.message
export const selectStep = (state) => state.contact.step

export default contactSlice.reducer
