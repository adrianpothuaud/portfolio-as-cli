import Link from 'next/link'

import { A } from '@/styled/A'
import { Log } from '@/molecules/Log'
import { Code } from '@/styled/Code'

export const Home = (props) => {
  return (
    <Log cwd={props.cwd} id="home" key={Math.random()}>Pour revenir au terminal précédent, cliquez <Link href='/' passHref><A>ici</A></Link> ou tapez <Code>accueil</Code>.</Log>
  )
}