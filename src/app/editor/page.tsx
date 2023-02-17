'use client'

import { type NextPage } from 'next'
import { useRef, useState } from 'react'
import { editor } from 'monaco-editor'

import { EDITOR } from '@/constants/edtior.const'

import { PreviewMode } from './components/PreviewMode'
import EditorLayout from '@/components/Editor.component'
import PageLayout from '@/components/PageLayout.component'

import IStandaloneCodeEditor = editor.IStandaloneCodeEditor

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
    <PageLayout title='editor | davworspace'>
      <div className='w-full h-full flex flex-row gap-8 p-8'>
        <EditorLayout
          theme='dracula'
          onMount={onMountHandler}
          width={'50%'}
          defaultLanguage={EDITOR.LANGUAGES.MD}
          defaultValue={'# File Markdown'}
          height='95vh'
          className={'h-editor-layout'}
          onChange={onChangeHandler}
        />
        <PreviewMode value={preview !== undefined ? preview : ''} />
      </div>
    </PageLayout>
  )
}

export default EditorPage
