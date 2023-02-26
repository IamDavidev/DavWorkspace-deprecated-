'use client'

import { EDITOR } from '@constants/edtior.const'
import { useEditor } from '@lib/hooks/useEditor.hook'
import { type NextPage } from 'next'
import { Suspense } from 'react'
import EditorLayout from './components/Editor.component'
import { PreviewMode } from './components/PreviewLayout'

interface IPropsEditNote {
  params: {
    id: string
  }
}

const EditNote: NextPage<IPropsEditNote> = ({
  params
}: IPropsEditNote): JSX.Element => {
  const { id } = params
  const { onChangeHandler, onMountHandler, preview } = useEditor()

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
            defaultValue={`# File Markdown ${'` ' + id + ' `'}`}
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

export default EditNote
