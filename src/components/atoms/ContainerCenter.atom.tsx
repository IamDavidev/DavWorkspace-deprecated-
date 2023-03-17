import { type ReactNode, type FC } from 'react'

export type ContainerDirection = 'row' | 'column'

export interface ContainerCenterProps {
  direction: ContainerDirection
  children: JSX.Element | ReactNode
}
export const ContainerCenter: FC<ContainerCenterProps> = ({
  direction,
  children
}): JSX.Element => {
  return (
    <section className={`flex justify-center items-center flex-${direction}`}>
      {children}
    </section>
  )
}
