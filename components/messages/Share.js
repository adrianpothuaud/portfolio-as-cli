import { Fragment } from 'react'
import {EmailShareButton, FacebookShareButton, LinkedinShareButton} from 'react-share'

import { A } from '@/styled/A'
import { B } from '@/styled/B'
import { Log } from '@/components/molecules/Log'

export const Share = () => {
  return (
    <Fragment key={Math.random()}>
      <Log cwd='~/'>Partager mon CV par <A><B>
        <EmailShareButton
          url='https://apothuaud.vercel.app/'
          subject={'Jettes un oeil au CV d\'Adrian Pothuaud!'}
          body={'J\'ai trouvé ce CV en ligne super intéressant, tu veux bien y jetter un coup d\'oeil?\n'}
          separator={'\n'}
        >
          email
        </EmailShareButton>
      </B></A>.</Log>
      <Log noCaret>Partager mon CV sur <A><B>
        <FacebookShareButton
          url='https://apothuaud.vercel.app/'
          quote={'Jettes un oeil au CV d\'Adrian Pothuaud!'}
        >
          Facebook
        </FacebookShareButton>
      </B></A>.</Log>
      <Log noCaret>Partager mon CV sur <A><B>
        <LinkedinShareButton
          url='https://apothuaud.vercel.app/'
          title={'Jettez un oeil au CV d\'Adrian Pothuaud!'}
          summary={'J\'ai trouvé ce CV en ligne super intéressant, jettez-y un coup d\'oeil?'}
          source={'https://apothuaud.vercel.app/'}
        >
          LinkedIn
        </LinkedinShareButton>
      </B></A>.</Log>
    </Fragment>
  )
}