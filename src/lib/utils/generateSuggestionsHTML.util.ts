import { type Monaco } from '@monaco-editor/react'
import { editor, languages } from 'monaco-editor'
import CompletionItem = languages.CompletionItem
import EditorOnMount = editor.IStandaloneCodeEditor

export function generateSuggestionsHTML(editor: EditorOnMount, monaco: Monaco): CompletionItem[] {
  return [
    {
      label: 'div',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '<div></div>',
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