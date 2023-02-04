import { type FC } from 'react'

import Editor, { type EditorProps } from '@monaco-editor/react'

type PropsEditorLayout = EditorProps

const EditorLayout: FC<PropsEditorLayout> = ({ height, ...props }): JSX.Element => {
  return (
    <>
      <Editor
        height={height}
        {...props}
      />
    </>
  )
}

export default EditorLayout
