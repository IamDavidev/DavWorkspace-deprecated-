'use client'

import { type NextPage } from 'next'
import { useRef, useState } from 'react'

import { EDITOR } from '@/constants/edtior.const'

import { PreviewMode } from './components/PreviewLayout'
import EditorLayout from '@/components/Editor.component'

import PageLayout from '@/components/PageLayout.component'

/**
 * try with useEditor hook
 *
 */

const EditorPage: NextPage = (): JSX.Element => {
  const [preview, setPreview] = useState<string | undefined>('')
  const editorRef = useRef(null)

  const onMountHandler = (editor: any): void => {
    editorRef.current = editor
    setPreview(editor.getValue())
  }

  const onChangeHandler = (value: string | undefined): void => {
    setPreview(value)
  }

  return (
    <>
      <PageLayout title='Editor'>
        <h1>Editor</h1>
        <div className='w-full h-full flex flex-row gap-8 p-8'>
          <div className='w-1/2 h-full sticky top-10'>
            <EditorLayout
              theme='vs-dark'
              onMount={onMountHandler}
              width={'100%'}
              defaultLanguage={EDITOR.LANGUAGES.MD}
              defaultValue={'# File Markdown'}
              height='85vh'
              className={'h-editor-layout'}
              onChange={onChangeHandler}
            />
          </div>
          <PreviewMode value={preview !== undefined ? preview : ''} />
        </div>
      </PageLayout>
    </>
  )
}

export default EditorPage
