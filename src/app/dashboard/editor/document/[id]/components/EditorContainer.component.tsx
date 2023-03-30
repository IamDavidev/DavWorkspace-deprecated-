'use client'

import { EDITOR } from '@constants/edtior.const'
import { useEditor } from '@lib/hooks/useEditor.hook'

import EditorLayout from './Editor.component'
import { PreviewMode } from './PreviewLayout'

export const ContainerEditor = ({
  initialValue
}: {
  initialValue: string
}): JSX.Element => {
  const { onChangeHandler, onMountHandler, preview } = useEditor()

  return (
    <>
      <EditorLayout
        onMount={onMountHandler}
        width={'100%'}
        defaultLanguage={EDITOR.LANGUAGES.MD}
        defaultValue={initialValue}
        height='calc(100vh - 4rem)'
        className={'h-editor-layout'}
        onChange={onChangeHandler}
      />
      <PreviewMode value={preview !== undefined ? preview : ''} />
    </>
  )
}
