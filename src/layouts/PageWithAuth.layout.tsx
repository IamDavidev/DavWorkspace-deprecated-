import { type FC } from 'react'

import PageLayout, { type IPropsPageLayout } from './Page.layout'

export const PageWithAuthLayout: FC<IPropsPageLayout> = (
  props
): JSX.Element => {
  return <PageLayout {...props} />
}
