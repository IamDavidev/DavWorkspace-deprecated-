import { useRef, useState } from 'react'

import oneDarkTheme from '@lib/utils/oneDarkTheme.json'
export interface IUseEditor {
  preview: string | undefined
  editorRef: any
  onMountHandler: (editor: any, monaco: any) => void
  onChangeHandler: (value: string | undefined) => void
  editorWillMount: (monaco: any) => void
}

export interface Token {
  token: string
  foreground: string
  background?: string
}

export const rules: Token[] = [
  {
    token: 'keyword.md',
    foreground: '#EF596F'
  },
  {
    token: 'strong.md',
    foreground: '#D8985F'
  },
  {
    token: 'emphasis.md',
    foreground: '#d55fde'
  },
  {
    token: 'string.link.md',
    foreground: '#d55fde'
  }
]

export function useEditor(): IUseEditor {
  const [preview, setPreview] = useState<string | undefined>('')
  const editorRef = useRef(null)

  const onMountHandler = (editor: any, monaco: any): void => {
    editorRef.current = editor
    setPreview(editor.getValue())
    monaco.editor.defineTheme('vs-dark-custom', {
      base: 'hc-black',
      inherit: true,
      rules,
      colors: {
        ...oneDarkTheme.colors,
        'editor.background': '#0d0d0d'
      }
    })
    monaco.editor.setTheme('vs-dark-custom')
  }

  const onChangeHandler = (value: string | undefined): void => {
    setPreview(value)
  }
  const editorWillMount = (monaco: any): void => {
    console.log('editorWillMount')
    console.log(monaco)
  }

  return {
    preview,
    editorRef,
    onChangeHandler,
    onMountHandler,
    editorWillMount
  }
}
