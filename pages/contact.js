import {Fragment, useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { init, send } from 'emailjs-com'
import {useRouter} from 'next/router'

import { ConsoleWrapper } from '@/styled/ConsoleWrapper'
import { Home } from '@/messages/Home'
import { Log } from '@/components/molecules/Log'
import {Code} from '@/styled/Code'
import {selectMessage, selectEmail, selectStep, setMessage, setEmail, setStep} from '@/slices/contactSlice'
import {TerminalPrompt} from '@/atoms/TerminalPrompt'
import {Modal} from '@/molecules/Modal'

init('user_FeMhdkhfAB6RubPltsplj')

export default function ContactPage() {
  const dispatch = useDispatch()
  const message = useSelector(selectMessage)
  const messageRef = useRef(null)
  const email = useSelector(selectEmail)
  const emailRef = useRef(null)
  const promptRef = useRef(null)
  const step = useSelector(selectStep)
  const [submitInput, setSubmitInput] = useState('')
  const [printNotFound, setPrintNotFound] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const router = useRouter()

  const isMessageFilled = message && message.length && ['submit'].includes(step)
  const isNameFilled = email && email.length && ['message', 'submit'].includes(step)

  useEffect(() => {
    if (step === 'submit' && promptRef.current) promptRef.current.focus()
    else if (step === 'message' && messageRef.current) messageRef.current.focus()
    else if (step === 'email' && emailRef.current) emailRef.current.focus()
  }, [messageRef, emailRef, promptRef, step])

  const changeEmailHandler = (e) => {
    dispatch(setEmail(e.target.value))
  }

  const keyPressEmailHandler = (e) => {
    if (e.key === 'Enter') {
      dispatch(setStep('message'))
    }
  }

  const changeMessageHandler = (e) => {
    dispatch(setMessage(e.target.value))
  }

  const keyPressMessageHandler = (e) => {
    if (e.key === 'Enter') {
      dispatch(setStep('submit'))
    }
  }

  const changeSubmitInputHandler = (e) => {
    setSubmitInput(e.target.value)
  }

  const keyPressSubmitInputHandler = (e) => {
    if (e.key === 'Enter') {
      if (submitInput === 'envoyer') {
        send('service_cc7szy2','template_742tkdl', {
          from_name: email,
          message,
          reply_to: email
        })
          .then(() => {
            dispatch(setEmail(''))
            dispatch(setMessage(''))
            dispatch(setStep('email'))
            setShowModal(true)
            setModalMessage('Votre message a bien été envoyé!')
          })
          .catch((err) => {
            console.log('FAILED...', err)
          })
      } else {
        setPrintNotFound(printNotFound + 1)
      }
      setSubmitInput('')
    }
  }

  const closeModalHandler = () => {
    router.push('/').then()
  }

  return (
    <ConsoleWrapper>
      <Home cwd='~/contact'/>
      <Log cwd='~/contact'>Afin de me contacter, veuillez s&apos;il-vous-plait renseigner quelques informations.</Log>
      <Log cwd='~/contact'>Tout d&apos;abord, votre adresse email:</Log>
      <TerminalPrompt
        cwd='~/contact'
        id='namePrompt'
        inputRef={emailRef}
        onChange={changeEmailHandler}
        onKeyPress={keyPressEmailHandler}
        value={email}
      />
      {isNameFilled && (
        <Fragment>
          <Log cwd='~/contact'>Puis votre message:</Log>
          <TerminalPrompt
            cwd='~/contact'
            id='messagePrompt'
            inputRef={messageRef}
            onChange={changeMessageHandler}
            onKeyPress={keyPressMessageHandler}
            value={message}
          />
          {isMessageFilled && (
            <Fragment>
              <Log cwd='~/contact'>Pour m&apos;envoyer votre message, tapez <Code>envoyer</Code>.</Log>
              <TerminalPrompt
                cwd='~/contact'
                id='submitPrompt'
                inputRef={promptRef}
                onChange={changeSubmitInputHandler}
                onKeyPress={keyPressSubmitInputHandler}
                value={submitInput}
              />
            </Fragment>
          )}
        </Fragment>
      )}
      {showModal && (
        <Modal message={modalMessage} onClose={closeModalHandler} />
      )}
    </ConsoleWrapper>
  )
}
