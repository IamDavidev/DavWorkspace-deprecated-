'use client'

import { type FC } from 'react'

import { EDITOR } from '@constants/edtior.const'
import { useEditor } from '@lib/hooks/useEditor.hook'

import EditorLayout from './Editor.component'
import { PreviewModeMD } from './PreviewLayout'


export interface ContainerEditorProps {
  value: string
}

export const ContainerEditor: FC<ContainerEditorProps> = ({ value }): JSX.Element => {
  const { onChangeHandler, onMountHandler, preview } = useEditor()

  return (
    <>
      <EditorLayout
        onMount={onMountHandler}
        width={'100%'}
        defaultLanguage={EDITOR.LANGUAGES.MD}
        defaultValue={value}
        height='calc(100vh - 4rem)'
        className={'h-editor-layout'}
        onChange={onChangeHandler}
      />
      <PreviewModeMD value={preview !== undefined ? preview : ''} />
    </>
  )
}
