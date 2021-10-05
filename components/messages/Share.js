import { Fragment } from 'react'

import { A } from '@/styled/A'
import { B } from '@/styled/B'
import { Log } from '@/components/molecules/Log'

export const Share = () => {
  return (
    <Fragment key={Math.random()}>
      <Log cwd='~/'><B>LinkedIn</B>: <A>partager</A>.</Log>
      <Log noCaret><B>Twitter</B>: <A>partager</A>.</Log>
      <Log noCaret><B>Facebook</B>: <A>partager</A>.</Log>
    </Fragment>
  )
}