import { type EditorProps } from '@monaco-editor/react'

export const globalEditorOptions: EditorProps['options'] = {
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
  lineNumbers: 'on',
  quickSuggestions: false
}
export const EDITOR = {
  
  THEMES: {
    LIGHT: 'light',
    DARK: 'dark'
  },
  LANGUAGES: {
    JS: 'javascript',
    TS: 'typescript',
    HTML: 'html',
    CSS: 'css',
    MD: 'markdown'
  }
}
