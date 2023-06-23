import { useRef, useState } from 'react'

import oneDarkTheme from '@lib/utils/oneDarkTheme.json'
import { editor, languages } from 'monaco-editor'
import { type  Monaco } from '@monaco-editor/react'
import CompletionItem = languages.CompletionItem
import EditorOnMount = editor.IStandaloneCodeEditor

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


export function generateSuggestionsHTML(editor: EditorOnMount, monaco: Monaco): CompletionItem[] {
  return [
    {
      label: 'div',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '<div>$1</div>',
      detail: 'HTML tag',
      range: monaco.Range.fromPositions(editor.getPosition() as any)
    },
    {
      label: 'span',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '<span></span>',
      detail: 'HTML tag',
      range: monaco.Range.fromPositions(editor.getPosition() as any)
    }, {
      label: 'a',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '<a href=""></a>',
      detail: 'HTML tag',
      range: monaco.Range.fromPositions(editor.getPosition() as any)
    }, {
      label: 'img',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '<img src="" alt="">',
      detail: 'HTML tag',
      range: monaco.Range.fromPositions(editor.getPosition() as any)
    }
  ]
}

export function useEditor(): IUseEditor {
  const [preview, setPreview] = useState<string | undefined>('')
  const editorRef = useRef()

  const onMountHandler = (editor: EditorOnMount, monaco: Monaco): void => {
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