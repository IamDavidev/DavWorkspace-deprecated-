import { type FC } from 'react'

import Editor, { type EditorProps } from '@monaco-editor/react'
import { JetBrains_Mono } from '@next/font/google'

// import oneDarkTheme from '../utils/oneDarkTheme.json'

// const theme = monaco

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin']
})

export const globalEditorOptions = {
  minimap: {
    enabled: false
  },
  fontSize: 13,
  fontWeight: '400',
  lineHeight: 20,
  scrollBeyondLastLine: false,
  wordWrap: 'on',
  wordWrapColumn: 80,
  wrappingIndent: 'same',
  automaticLayout: true,
  tabSize: 2,
  insertSpaces: true,
  cursorStyle: 'line',
  cursorWidth: 2,
  cursorBlinking: 'smooth',
  lineNumbers: 'off',
  lineNumbersMinChars: 3
}

type PropsEditorLayout = EditorProps

const EditorLayout: FC<PropsEditorLayout> = ({
  height,
  className,
  ...props
}): JSX.Element => {
  return (
    <div
      className='w-1/2 h-full sticky top-8 flex flex-col gap-1rem 
    [&>section]:rounded-2xl [&>section]:overflow-hidden
    '>
      <Editor
        theme='vs-dark'
        options={globalEditorOptions}
        height={height}
        {...props}
        className={`${className ?? ' '}  ${jetBrainsMono.className}`}
      />
    </div>
  )
}

export default EditorLayout
