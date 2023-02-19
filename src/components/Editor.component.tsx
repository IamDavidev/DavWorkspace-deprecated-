import { type FC } from 'react'

import Editor, { type EditorProps } from '@monaco-editor/react'

type PropsEditorLayout = EditorProps

const EditorLayout: FC<PropsEditorLayout> = ({
  height,
  ...props
}): JSX.Element => {
  return (
    <div className='w-1/2 h-full sticky top-10   flex flex-col gap-1rem'>
      <Editor height={height} {...props} />
    </div>
  )
}

export default EditorLayout
