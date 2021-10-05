import React from 'react'
import PropTypes from 'prop-types'

import { BeforePromptCurrentFolderWrapper } from '@/styled/BeforePromptCurrentFolderWrapper'
import { Input } from '@/styled/Input'
import { PromptSymbol } from '@/styled/PromptSymbol'
import { PromptWrapper } from '@/styled/PromptWrapper'
import { PromptMessage } from '@/styled/PromptMessage'
import { Textarea } from '@/styled/Textarea'

export const TerminalPrompt = (props) => {
  return (
    <PromptWrapper className="prompt">
      <BeforePromptCurrentFolderWrapper>{props.cwd}</BeforePromptCurrentFolderWrapper>
      <PromptSymbol>$</PromptSymbol>
      {props.message && (
        <PromptMessage>{props.message}</PromptMessage>
      )}
      {!props.textarea && (
        <Input
          autoComplete='off'
          id={props.id || 'terminalInput'}
          onChange={props.onChange}
          onKeyPress={props.onKeyPress}
          ref={props.inputRef}
          value={props.value}
        />
      )}
      {props.textarea && (
        <Textarea
          id={props.id || 'terminalInput'}
          maxLength={150}
          onChange={props.onChange}
          onKeyPress={props.onKeyPress}
          ref={props.inputRef}
          rows={4}
          value={props.value}
        />
      )}
    </PromptWrapper>
  )
}

TerminalPrompt.propTypes = {
  cwd: PropTypes.string,
  id: PropTypes.string,
  inputRef: PropTypes.any,
  message: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
}