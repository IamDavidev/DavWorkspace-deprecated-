import { type FC, type ReactNode } from 'react'

interface IPropsRootLayoutEditor {
  children: ReactNode
}

const RootLayoutEditor: FC<IPropsRootLayoutEditor> = (props) => {
  const { children } = props
  return (
    <>
      <div className={'layout-editor h-full max-h-screen p-4'}>{children}</div>
    </>
  )
}

export default RootLayoutEditor
