import { appColors } from '@/constants/colors'
import styled from 'styled-components'

export const Textarea = styled.textarea`
  caret-color: ${appColors['Text White']};
  color: ${appColors['Text White']};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  opacity: 1;
`