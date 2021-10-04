import { Fragment } from 'react'

import { A } from '@/styled/A'
import { B } from '@/styled/B'
import { Log } from '@/components/molecules/Log'

export const Share = () => {
  return (
    <Fragment>
      <Log><B>Facebook</B>: <A>partager</A>.</Log>
    </Fragment>
  )
}