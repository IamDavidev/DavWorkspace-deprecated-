'use client'

import { type NextPage } from 'next'
import { useRef } from 'react'
import { editor } from 'monaco-editor'
import EditorLayout from '@/components/Editor.component'
// import {} from 'react-m'
import ReactMarkdown from 'react-markdown'

import IStandaloneCodeEditor = editor.IStandaloneCodeEditor

const EditorPage: NextPage = (): JSX.Element => {
  const editorRef = useRef<null | IStandaloneCodeEditor>(null)
  // const []

  const onMountHandler = (editor: IStandaloneCodeEditor): void => {
    editorRef.current = editor
  }

  const onChangeHandler = (value: string | undefined): void => {
    console.log({
      value
    })
  }

  return (
    <div>
      Editor Page
      <EditorLayout
        onMount={onMountHandler}
        width={'50%'}
        defaultLanguage={'markdown'}
        defaultValue={'# File Markdown'}
        height='95vh'
        className={'h-editor-layout'}
        onChange={onChangeHandler}
      />
      {/* <ReactM */}
      <ReactMarkdown
        // children={editorRef.current?.getValue() ?? '# no Content'}
      >
        {editorRef.current?.getValue() ?? '# No Content'}
      </ReactMarkdown>
    </div>
  )
}

export default EditorPage
