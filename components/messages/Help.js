import { Fragment } from 'react'

import { Code } from '@/components/styled/Code'
import { Log } from '@/components/molecules/Log'

export const Help = () => {
  return (
    <Fragment>
      <Log><Code>emplois</Code>: Mes emplois</Log>
      <Log><Code>formations</Code>: Mon parcours de formation</Log>
      <Log><Code>contact</Code>: Me contacter</Log>
      <Log><Code>partage</Code>: Partager mon CV</Log>
    </Fragment>
  )
}