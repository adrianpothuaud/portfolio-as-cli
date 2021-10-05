import Link from 'next/link'

import { A } from '@/styled/A'
import { Log } from '@/molecules/Log'

export const Home = (props) => {
  return (
    <Log cwd={props.cwd} id="home" key={Math.random()}>Pour revenir au terminal précédent, cliquez <Link href='/' passHref><A>ici</A></Link>.</Log>
  )
}