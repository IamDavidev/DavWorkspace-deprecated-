'use client'

import { type NextPage } from 'next'
import { EDITOR } from '@/constants/edtior.const'

import { PreviewMode } from './components/PreviewLayout'
import EditorLayout from '@/components/Editor.component'
import { useEditor } from '@/lib/hooks/useEditor.hook'
import { Suspense } from 'react'

const EditorPage: NextPage = (): JSX.Element => {
  const { onChangeHandler, onMountHandler, preview } = useEditor()
  console.log(preview)

  return (
    <>
      <div className='w-full h-full flex flex-row py-8 rounded-2xl gap-4 overflow-hidden'>
        <Suspense
          fallback={
            <div className='w-full h-full flex justify-center items-center'>
              <div>Loading Suspense ...</div>
            </div>
          }>
          <EditorLayout
            onMount={onMountHandler}
            width={'100%'}
            defaultLanguage={EDITOR.LANGUAGES.MD}
            defaultValue={'# File Markdown'}
            height='calc(100vh - 4rem)'
            className={'h-editor-layout'}
            onChange={onChangeHandler}
          />
          {preview !== ' ' && (
            <PreviewMode value={preview !== undefined ? preview : ''} />
          )}
        </Suspense>
      </div>
    </>
  )
}

export default EditorPage
