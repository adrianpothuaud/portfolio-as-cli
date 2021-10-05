import Link from 'next/link'

import { Log } from '@/molecules/Log'
import { A } from '@/styled/A'
import { B } from '@/styled/B'

export const Info = () => {
  return (
    <Log cwd='~/' id="info" key={Math.random()}>
      Je m&apos;appele <B>Adrian</B>,
      j&apos;ai {new Date().getFullYear() - 1993}ans.
      Je viens du <A>Bassin d&apos;Arcachon</A> et&nbsp;
      <Link href='https://www.youtube.com/watch?v=ra9_BpD6L-U' passHref><A>j&apos;aimes le veau!</A></Link>
    </Log>
  )
}