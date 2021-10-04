import React from 'react'

import { BeforePromptCurrentFolderWrapper } from '@/styled/BeforePromptCurrentFolderWrapper'
import { PromptMessage } from '@/styled/PromptMessage'
import { PromptSymbol } from '@/styled/PromptSymbol'
import { PromptWrapper } from '@/styled/PromptWrapper'

export const Log = (props) => {
  return (
    <PromptWrapper>
      <BeforePromptCurrentFolderWrapper>~/</BeforePromptCurrentFolderWrapper>
      <PromptSymbol>$</PromptSymbol>
      <PromptMessage>{props.children}</PromptMessage>
    </PromptWrapper>
  )
}
