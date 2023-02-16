'use client'

import { type NextPage } from 'next'
import { useRef, useState } from 'react'
import { editor } from 'monaco-editor'

import IStandaloneCodeEditor = editor.IStandaloneCodeEditor

import { PreviewMode } from './components/PreviewMode'
import EditorLayout from '@/components/Editor.component'

const EditorPage: NextPage = (): JSX.Element => {
  const [preview, setPreview] = useState<string | undefined>('')
  const editorRef = useRef<null | IStandaloneCodeEditor>(null)

  const onMountHandler = (editor: IStandaloneCodeEditor): void => {
    editorRef.current = editor
    setPreview(editor.getValue())
  }

  const onChangeHandler = (value: string | undefined): void => {
    setPreview(value)
  }

  return (
    <div className='flex flex-row gap-4'>
      <EditorLayout
        onMount={onMountHandler}
        width={'50%'}
        defaultLanguage={'markdown'}
        defaultValue={'# File Markdown'}
        height='95vh'
        className={'h-editor-layout'}
        onChange={onChangeHandler}
      />
      <PreviewMode value={preview !== undefined ? preview : ''} />
    </div>
  )
}

export default EditorPage
