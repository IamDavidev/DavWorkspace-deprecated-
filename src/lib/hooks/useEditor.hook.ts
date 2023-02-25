import { useMonaco } from '@monaco-editor/react'
import { useRef, useState, useEffect } from 'react'

export interface IUseEditor {
  preview: string | undefined
  editorRef: any
  onMountHandler: (editor: any) => void
  onChangeHandler: (value: string | undefined) => void
}

export function useEditor(): IUseEditor {
  const monaco = useMonaco()
  const [preview, setPreview] = useState<string | undefined>('')
  const editorRef = useRef(null)

  const onMountHandler = (editor: any): void => {
    editorRef.current = editor
    setPreview(editor.getValue())
  }

  const onChangeHandler = (value: string | undefined): void => {
    setPreview(value)
  }

  useEffect(() => {
    // monaco.editor.defineTheme('one-dark', {
    //   base: 'vs-dark',
    //   inherit: true,
    //   ...oneDarkTheme
    // })
    console.log({
      monaco
    })
  }, [])

  return {
    preview,
    editorRef,
    onChangeHandler,
    onMountHandler
  }
}
