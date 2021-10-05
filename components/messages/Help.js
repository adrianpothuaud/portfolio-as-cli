import { Fragment } from 'react'

import { Code } from '@/components/styled/Code'
import { Log } from '@/components/molecules/Log'

export const Help = () => {
  return (
    <Fragment key={Math.random()}>
      <Log cwd='~/'>Tapez <Code>emplois</Code> pour voir l&apos;historique et les descriptions de mes emplois.</Log>
      <Log noCaret>Tapez <Code>projets</Code> pour la liste de mes projets.</Log>
      <Log noCaret>Tapez <Code>formations</Code> pour voir mon parcours de formation.</Log>
      <Log noCaret>Tapez <Code>contact</Code> pour me contacter.</Log>
      <Log noCaret>Tapez <Code>partage</Code> pour partager mon CV sur les réseaux.</Log>
    </Fragment>
  )
}