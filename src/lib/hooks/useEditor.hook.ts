import { useRef, useState } from 'react'

import oneDarkTheme from '../../utils/oneDarkTheme.json'

export interface IUseEditor {
  preview: string | undefined
  editorRef: any
  onMountHandler: (editor: any, monaco: any) => void
  onChangeHandler: (value: string | undefined) => void
  editorWillMount: (monaco: any) => void
}

export function useEditor(): IUseEditor {
  const [preview, setPreview] = useState<string | undefined>('')
  const editorRef = useRef(null)

  const onMountHandler = (editor: any, monaco: any): void => {
    editorRef.current = editor
    setPreview(editor.getValue())
    monaco.editor.defineTheme('vs-dark-custom', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        ...oneDarkTheme.colors,
        'editor.background': '#0d0d0d'
      }
    })
    // monaco.la
    monaco.editor.setTheme('vs-dark-custom')
  }

  const onChangeHandler = (value: string | undefined): void => {
    setPreview(value)
  }
  const editorWillMount = (monaco: any): void => {
    console.log('editorWillMount')
  }

  return {
    preview,
    editorRef,
    onChangeHandler,
    onMountHandler,
    editorWillMount
  }
}
