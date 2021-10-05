import { B } from '@/components/styled/B'
import { Log } from '@/components/molecules/Log'

export const Welcome = () => {
  return (
    <Log cwd='~/' key={Math.random()}>Bienvenue sur mon CV intéractif, je suis <B>Adrian Pothuaud</B> senior QA Engineer et Tech-curieux.</Log>
  )
}