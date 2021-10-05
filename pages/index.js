import { useEffect, useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/router'

import { ConsoleWrapper } from '@/styled/ConsoleWrapper'
import { TerminalPrompt } from '@/components/atoms/TerminalPrompt'
import {addMessage, resetInput, selectInput, selectMessages, setInput} from '@/slices/homeSlice'
import { Contact } from '@/messages/Contact'
import { Help } from '@/messages/Help'
import { NotFound } from '@/messages/NotFound'
import { TypeHelp } from '@/messages/TypeHelp'
import { Share } from '@/messages/Share'
import { Welcome } from '@/messages/Welcome'
import { gameCommands } from '@/data/gameCommands'

export default function HomePage() {
  const dispatch = useDispatch()
  const input = useSelector(selectInput)
  const messages = useSelector(selectMessages)
  const promptRef = useRef(null)
  const router = useRouter()

  const processInput = () => {
    if (!gameCommands.includes(input)) dispatch(addMessage('notFound'))
    else if (input === 'contact') router.push('/contact').then()
    else dispatch(addMessage(input))
    dispatch(resetInput())
  }

  const changeHandler = (e) => {
    dispatch(setInput(e.target.value))
  }

  const keyPressHandler = (e) => {
    if(e.key === 'Enter'){
      processInput()
    }
  }

  useEffect(() => {
    if (promptRef.current) promptRef.current.focus()
  }, [promptRef])

  return (
    <ConsoleWrapper>
      {messages.map(message => ({
        'contact': <Contact key={Math.random()}/>,
        'aide': <Help key={Math.random()}/>,
        'notFound': <NotFound cwd='~/' key={Math.random()}/>,
        'partage': <Share key={Math.random()}/>,
        'typeHelp': <TypeHelp key={Math.random()}/>,
        'welcome': <Welcome key={Math.random()}/>
      }[message]))}
      <TerminalPrompt
        cwd='~/'
        inputRef={promptRef}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        value={input}
      />
    </ConsoleWrapper>
  )
}