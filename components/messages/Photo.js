import Image from 'next/image'

import { Log } from '@/molecules/Log'

export const Photo = () => {
  return (
    <Log cwd='~/' id="photo" key={Math.random()}><Image height={220} src='/me.png' width={220} /></Log>
  )
}