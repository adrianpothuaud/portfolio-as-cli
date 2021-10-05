import { Fragment } from 'react'

import { A } from '@/styled/A'
import { B } from '@/styled/B'
import { Log } from '@/components/molecules/Log'

export const Share = () => {
  return (
    <Fragment key={Math.random()}>
      <Log cwd='~/'>Partager mon CV sur <A><B>LinkedIn</B></A>.</Log>
      <Log noCaret>Partager mon CV sur <A><B>Twitter</B></A>.</Log>
      <Log noCaret>Partager mon CV sur <A><B>Facebook</B></A>.</Log>
    </Fragment>
  )
}