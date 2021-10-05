import { Fragment } from 'react'

import { Code } from '@/components/styled/Code'
import { Log } from '@/components/molecules/Log'

export const Help = () => {
  return (
    <Fragment key={Math.random()}>
      <Log cwd='~/'>Tapez <Code>info</Code> pour voir des informations générales à propos de moi.</Log>
      <Log cwd='~/'>Tapez <Code>photo</Code> pour voir une photo de moi.</Log>
      <Log cwd='~/'>Tapez <Code>emplois</Code> pour voir l&apos;historique et les descriptions de mes emplois.</Log>
      <Log cwd='~/'>Tapez <Code>projets</Code> pour la liste de mes projets.</Log>
      <Log cwd='~/'>Tapez <Code>formations</Code> pour voir mon parcours de formation.</Log>
      <Log cwd='~/'>Tapez <Code>contact</Code> pour me contacter.</Log>
      <Log cwd='~/'>Tapez <Code>partage</Code> pour partager mon CV sur les réseaux.</Log>
      <Log cwd='~/'>Tapez <Code>clear</Code> pour réinitialiser l&apos;application.</Log>
    </Fragment>
  )
}