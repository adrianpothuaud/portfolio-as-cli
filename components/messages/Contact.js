import Link from 'next/link'

import { A } from '@/styled/A'
import { Log } from '@/molecules/Log'

export const Contact = () => {
  return (
    <Log id="contact" key={Math.random()}>Pour me contacter, visitez ce lien: <Link href='/contact' passHref><A>/contact</A></Link>.</Log>
  )
}