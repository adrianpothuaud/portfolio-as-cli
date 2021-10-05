import { B } from '@/components/styled/B'
import { Code } from '@/components/styled/Code'
import { Log } from '@/components/molecules/Log'

export const NotFound = (props) => {
  return (
    <Log cwd={props.cwd} key={Math.random()}>Cette commande n&apos;est <B>pas reconnue</B>, tapez <Code>aide</Code> pour voir les commandes disponibles.</Log>
  )
}