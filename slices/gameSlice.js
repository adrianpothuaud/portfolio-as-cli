import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  input: '',
  messages: [
    'welcome',
    'typeHelp',
  ]
}

export const gameSlice = createSlice({
  name: 'game',
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
} = gameSlice.actions

export const selectInput = (state) => state.game.input
export const selectMessages = (state) => state.game.messages

export default gameSlice.reducer
