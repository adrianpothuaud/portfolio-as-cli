import { B } from '@/components/styled/B'
import { Log } from '@/components/molecules/Log'
import { Fragment } from 'react'

export const Welcome = () => {
  return (
    <Fragment>
      <Log>Bienvenue sur mon CV intéractif, je suis <B>Adrian Pothuaud</B> senior QA Engineer et Tech-curieux.</Log>
      <Log>Je vais vous guider sur cette application pour en apprendre plus sur moi.</Log>
    </Fragment>
  )
}