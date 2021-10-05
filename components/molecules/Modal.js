import PropTypes from 'prop-types'
import styled from 'styled-components'

import {appColors} from '@/constants/colors'

const Wrapper = styled.div`
  position: fixed;
  margin: 64px;
  padding: 32px;
  background-color: ${appColors.Magnolia};
`

const Message = styled.div`
  color: ${appColors['Forest Green Crayola']};
`

const Close = styled.div`
  color: ${appColors['Fire Opal']};
  cursor: pointer;
  margin-top: 8px;
`

export const Modal = (props) => {
  return (
    <Wrapper>
      <Message>{props.message}</Message>
      <Close onClick={props.onClose}>Fermer</Close>
    </Wrapper>
  )
}

Modal.propTypes = {
  message: PropTypes.string,
  onclose: PropTypes.func
}