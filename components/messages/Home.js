import Link from 'next/link'

import { A } from '@/styled/A'
import { Log } from '@/molecules/Log'

export const Home = () => {
  return (
    <Log>Pour revenir au terminal, cliquez <Link href='/' passHref><A>ici</A></Link>.</Log>
  )
}