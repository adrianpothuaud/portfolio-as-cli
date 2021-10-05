import { Fragment } from 'react'

import { Code } from '@/components/styled/Code'
import { Log } from '@/components/molecules/Log'

export const Help = () => {
  return (
    <Fragment key={Math.random()}>
      <Log cwd='~/'><Code>emplois</Code>: Mes emplois</Log>
      <Log noCaret><Code>projets</Code>: Mes projets</Log>
      <Log noCaret><Code>formations</Code>: Mon parcours de formation</Log>
      <Log noCaret><Code>contact</Code>: Me contacter</Log>
      <Log noCaret><Code>partage</Code>: Partager mon CV</Log>
    </Fragment>
  )
}