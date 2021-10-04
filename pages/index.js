import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { ConsoleWrapper } from '@/styled/ConsoleWrapper'
import { Prompt } from '@/atoms/Prompt'
import { selectMessages } from '@/slices/gameSlice'
import { Contact } from '@/messages/Contact'
import { Help } from '@/messages/Help'
import { NotFound } from '@/messages/NotFound'
import { TypeHelp } from '@/messages/TypeHelp'
import { Share } from '@/messages/Share'
import { Welcome } from '@/messages/Welcome'

export default function HomePage() {
  const messages = useSelector(selectMessages)
  const promptRef = useRef(null)

  useEffect(() => {
    if (promptRef.current) promptRef.current.focus()
  }, [promptRef])

  return (
    <ConsoleWrapper>
      {messages.map(message => ({
        'contact': <Contact />,
        'aide': <Help />,
        'notFound': <NotFound />,
        'partage': <Share />,
        'typeHelp': <TypeHelp />,
        'welcome': <Welcome />
      }[message]))}
      <Prompt inputRef={promptRef} />
    </ConsoleWrapper>
  )
}