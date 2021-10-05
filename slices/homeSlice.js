import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  input: '',
  messages: [
    'welcome',
    'typeHelp',
  ]
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload)
    },
    resetInput: (state, payload) => {
      state.input = ''
    },
    setInput: (state, action) => {
      state.input = action.payload
    }
  }
})

export const {
  addMessage,
  resetInput,
  setInput,
} = homeSlice.actions

export const selectInput = (state) => state.home.input
export const selectMessages = (state) => state.home.messages

export default homeSlice.reducer
