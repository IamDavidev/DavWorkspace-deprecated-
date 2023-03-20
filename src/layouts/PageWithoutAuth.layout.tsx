import { UserServerRepository } from '@lib/repositories/UserServer.repository'
import { type FC } from 'react'
import PageLayout, { type IPropsPageLayout } from './Page.layout'

export const PageWithoutAuthLayout: FC<IPropsPageLayout> = (
  props
): JSX.Element => {
  // const user = UserServerRepository.getUserServer()

  // console.log({PageLayout})

  return <PageLayout {...props} />
}
