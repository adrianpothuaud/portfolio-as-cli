import React from 'react'

import { BeforePromptCurrentFolderWrapper } from '@/styled/BeforePromptCurrentFolderWrapper'
import { PromptMessage } from '@/styled/PromptMessage'
import { PromptSymbol } from '@/styled/PromptSymbol'
import { PromptWrapper } from '@/styled/PromptWrapper'

export const Log = (props) => {
  return (
    <PromptWrapper className="log">
      {!props.noCaret && (<BeforePromptCurrentFolderWrapper>{props.cwd}</BeforePromptCurrentFolderWrapper>)}
      {!props.noCaret && (<PromptSymbol>$</PromptSymbol>)}
      <PromptMessage className="message">
        {props.children}
      </PromptMessage>
    </PromptWrapper>
  )
}
