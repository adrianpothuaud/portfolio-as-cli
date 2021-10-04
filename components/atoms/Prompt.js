import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BeforePromptCurrentFolderWrapper } from '@/styled/BeforePromptCurrentFolderWrapper'
import { Input } from '@/styled/Input'
import { PromptSymbol } from '@/styled/PromptSymbol'
import { PromptWrapper } from '@/styled/PromptWrapper'
import { addMessage, resetInput, selectInput, setInput } from '@/slices/gameSlice'
import { gameCommands } from '@/data/gameCommands'

export const Prompt = (props) => {
  const dispatch = useDispatch()
  const input = useSelector(selectInput)

  const processInput = () => {
    if (!gameCommands.includes(input)) dispatch(addMessage('notFound'))
    else dispatch(addMessage(input))
    dispatch(resetInput())
  }

  const keyPressHandler = (e) => {
    if(e.key === 'Enter'){
      processInput()
    }
  }

  return (
    <PromptWrapper>
      <BeforePromptCurrentFolderWrapper>~/</BeforePromptCurrentFolderWrapper>
      <PromptSymbol>$</PromptSymbol>
      <Input onChange={(e) => dispatch(setInput(e.target.value))} onKeyPress={keyPressHandler} ref={props.inputRef} value={input} />
    </PromptWrapper>
  )
}
