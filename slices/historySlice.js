import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  commands: []
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addCommand: (state, action) => {
      state.commands.push(action.payload)
    },
    resetHistory: (state, action) => {
      state.commands = []
    }
  }
})

export const {
  addCommand,
  resetHistory,
} = historySlice.actions

export const selectCommands = (state) => state.history.commands

export default historySlice.reducer
