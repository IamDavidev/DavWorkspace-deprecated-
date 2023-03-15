'use client'

import { Suspense } from 'react'

import { EDITOR } from '@constants/edtior.const'
import { useEditor } from '@lib/hooks/useEditor.hook'
import EditorLayout from './components/Editor.component'
import { PreviewMode } from './components/PreviewLayout'

export interface IPropsEditNotePage {
  params: {
    id: string
  }
}

const EditNotePage = (props: IPropsEditNotePage): JSX.Element => {
  const { id: docId } = props.params
  const { onChangeHandler, onMountHandler, preview } = useEditor()
  console.log('id', docId)

  return (
    <>
      {/* <Head title={` ${idNote} | DavWorkspace`} /> */}
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
            defaultValue={`# File Markdown ${'` ' + docId + ' `'}`}
            height='calc(100vh - 4rem)'
            className={'h-editor-layout'}
            onChange={onChangeHandler}
          />
          {preview !== '' && (
            <PreviewMode value={preview !== undefined ? preview : ''} />
          )}
        </Suspense>
      </div>
    </>
  )
}

export default EditNotePage
