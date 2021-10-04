import { useEffect, useRef } from 'react'

import { ConsoleWrapper } from '@/styled/ConsoleWrapper'
import { Prompt } from '@/atoms/Prompt'
import { Home } from '@/messages/Home'
import { Log } from '@/components/molecules/Log'

export default function ContactPage() {
  const promptRef = useRef(null)

  useEffect(() => {
    if (promptRef.current) promptRef.current.focus()
  }, [promptRef])

  return (
    <ConsoleWrapper>
      <Home />
      <Log>Votre nom:</Log>
      <Prompt inputRef={promptRef} />
    </ConsoleWrapper>
  )
}
