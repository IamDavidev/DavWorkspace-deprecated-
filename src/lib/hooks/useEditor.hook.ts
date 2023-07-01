import { useCallback, useRef, useState } from 'react'

import oneDarkTheme from '@lib/utils/oneDarkTheme.json'
import { editor } from 'monaco-editor'
import { type  Monaco } from '@monaco-editor/react'

import { generateSuggestionsHTML } from '@lib/utils/generateSuggestionsHTML.util'
import { rules } from '@lib/utils/rulesTokens.util'
import { decode } from 'js-base64'
import EditorOnMount = editor.IStandaloneCodeEditor

export interface UseEditor {
  preview: string | undefined
  editorRef: any
  onMountHandler: (editor: any, monaco: any) => void
  onChangeHandler: (value: string | undefined) => void
  editorWillMount: (monaco: any) => void
}

export type valueToDecode = string | undefined
const defaultValueToDecode = '# Hello World!'

function decodeBase64(value: string | undefined): string {
  if (value === undefined) return defaultValueToDecode
  if (value === '') return defaultValueToDecode

  return decode(value)
}


export function useEditor(initialValueBase64: string): UseEditor {
  const [preview, setPreview] = useState<string | undefined>(decodeBase64(initialValueBase64))
  const editorRef = useRef()

  const onMountHandler = useCallback((editor: EditorOnMount, monaco: Monaco): void => {
    editorRef.current = editor as any
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
    monaco.languages.registerCompletionItemProvider('markdown', {
      provideCompletionItems() {
        return {
          suggestions: generateSuggestionsHTML(editor, monaco)
        }
      }
    })
  }, [])

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