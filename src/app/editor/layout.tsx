import { type FC, type ReactNode } from 'react'

interface IPropsRootLayoutEditor {
  children: ReactNode
}

const RootLayoutEditor: FC<IPropsRootLayoutEditor> = ({ children }): JSX.Element => {
  return (
    <div className={'layout editor '}>
      {children}
    </div>
  )
}

export default RootLayoutEditor
