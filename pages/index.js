import { Fragment, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { ConsoleWrapper } from '@/styled/ConsoleWrapper'
import { TerminalPrompt } from '@/components/atoms/TerminalPrompt'
import { addMessage, resetInput, resetMessages, selectInput, selectMessages, setInput } from '@/slices/homeSlice'
import { Contact } from '@/messages/Contact'
import { Help } from '@/messages/Help'
import { NotFound } from '@/messages/NotFound'
import { TypeHelp } from '@/messages/TypeHelp'
import { Share } from '@/messages/Share'
import { Welcome } from '@/messages/Welcome'
import { gameCommands } from '@/data/gameCommands'
import { Photo } from '@/messages/Photo'
import { Info } from '@/messages/Info'
import { addCommand, resetHistory, selectCommands } from '@/slices/historySlice'

export default function HomePage() {
  const dispatch = useDispatch()
  const history = useSelector(selectCommands)
  const input = useSelector(selectInput)
  const messages = useSelector(selectMessages)
  const promptRef = useRef(null)
  const router = useRouter()

  const processInput = () => {
    if (input && input.length > 0) {
      if (!gameCommands.includes(input)) dispatch(addMessage('notFound'))
      else if (input === 'clear') {
        dispatch(resetMessages())
        dispatch(resetHistory())
      }
      else if (input === 'contact') router.push('/contact').then()
      else dispatch(addMessage(input))
      dispatch(addCommand(input))
      dispatch(resetInput())
    }
  }

  const changeHandler = (e) => {
    if (e.target.value && e.target.value.length > 0) dispatch(setInput(e.target.value))
  }

  const keyDownHandler = (e) => {
    if (e.code === 'Backspace') {
      let newInput = input.slice(0, -1)
      dispatch(setInput(newInput))
    }
    // up arrow
    if (e.code === 'ArrowUp') {
      let currentCommandIndex = history.indexOf(input)
      if (currentCommandIndex > -1) {
        let previousIndex = currentCommandIndex - 1
        if (previousIndex >= 0) {
          const previousCommand = history[previousIndex]
          dispatch(setInput(previousCommand))
        }
      } else {
        const previousCommand = history[history.length - 1]
        if (previousCommand) dispatch(setInput(previousCommand))
      }
    }
    // down arrow
    if (e.code === 'ArrowDown') {
      let currentCommandIndex = history.indexOf(input)
      if (currentCommandIndex > -1) {
        let nextIndex = currentCommandIndex + 1
        if (nextIndex < history.length) {
          const nextCommand = history[nextIndex]
          dispatch(setInput(nextCommand))
        } else {
          dispatch(setInput(''))
        }
      }
    }
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
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        {/* TITLE */}
        <title>CV - Adrian Pothuaud</title>
        {/* SEO */}
        <meta name="description" content="Adrian Pothuaud, senior QA Engineer et Tech-curieux. Mon CV intéractif en ligne!" />
        <link rel="canonical" href="https://apothuaud.vercel.app/" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CV - Adrian Pothuaud" />
        <meta property="og:description" content="Adrian Pothuaud, senior QA Engineer et Tech-curieux. Mon CV intéractif en ligne!" />
        <meta property="og:url" content="https://apothuaud.vercel.app/" />
        <meta property="og:site_name" content="Adrian Pothuaud" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Adrian Pothuaud, senior QA Engineer et Tech-curieux. Mon CV intéractif en ligne!" />
        <meta name="twitter:title" content="CV - Adrian Pothuaud" />
        <meta name="twitter:image" content="/me.png" />
        {/* FAVICON */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#191308" />
      </Head>
      <ConsoleWrapper>
        {messages.map(message => ({
          'aide': <Help key={Math.random()}/>,
          'contact': <Contact key={Math.random()}/>,
          'info': <Info key={Math.random()}/>,
          'notFound': <NotFound cwd='~/' key={Math.random()}/>,
          'partage': <Share key={Math.random()}/>,
          'photo': <Photo key={Math.random()}/>,
          'typeHelp': <TypeHelp key={Math.random()}/>,
          'welcome': <Welcome key={Math.random()}/>
        }[message]))}
        <TerminalPrompt
          cwd='~/'
          inputRef={promptRef}
          onChange={changeHandler}
          onKeyDown={keyDownHandler}
          onKeyPress={keyPressHandler}
          value={input}
        />
      </ConsoleWrapper>
    </Fragment>
  )
}