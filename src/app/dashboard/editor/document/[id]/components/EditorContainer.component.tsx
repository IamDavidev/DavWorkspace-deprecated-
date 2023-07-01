'use client'

import { type FC } from 'react'

import { useEditor } from '@lib/hooks/useEditor.hook'

import EditorLayout from './Editor.component'
import { PreviewModeMD } from './PreviewLayout'
import { EDITOR } from '@constants/editor.const'


export interface ContainerEditorProps {
  initialValue: string
  userId: string
  documentId: string
}

export const ContainerEditor: FC<ContainerEditorProps> = (props): JSX.Element => {
  const { initialValue, userId, documentId } = props
  const { onChangeHandler, onMountHandler, preview } = useEditor('IyBIZWxsbyB3b3JsZCA=')

  return (
    <div className='w-full flex flex-row py-8 rounded-2xl gap-4 overflow-hidden p-4'>
      <EditorLayout
        onMount={onMountHandler}
        width={'100%'}
        defaultLanguage={EDITOR.LANGUAGES.MD}
        defaultValue={initialValue}
        height='calc(100vh - 7rem)'
        className={'h-editor-layout'}
        onChange={onChangeHandler}
        title={'Editor Example'}
        value={preview}
        userId={userId}
        documentId={documentId}
      />
      <PreviewModeMD value={preview !== undefined ? preview : ''} />
    </div>
  )
}
