import styled from 'styled-components'

import { appColors } from '@/constants/colors'

const paddingPixels = 8

export const ConsoleWrapper = styled.div`
  background-color: ${appColors['Black Chocolate']};

  padding: ${paddingPixels}px;
  
  ${'' /* full screen */}
  height: calc(100vh - ${2*paddingPixels}px);
  width: calc(100vw - ${2*paddingPixels}px);

  ${'' /* centered flex column */}
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  
  overflow-y: scroll;
`