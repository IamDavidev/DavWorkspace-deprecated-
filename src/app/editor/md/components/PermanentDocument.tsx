'use client'

import { type FC } from 'react'
import Editor from '@monaco-editor/react'

import { useEditor } from '@lib/hooks/useEditor.hook'
import { RenderMDtoHTML } from '@components/RederMDtoHTML'
import { EDITOR, globalEditorOptions } from '@constants/editor.const'
import { JetBrains_Mono } from '@next/font/google'
import { debounce } from '@lib/utils/debounce'
import { encode } from 'js-base64'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin']
})

const debounceEncode = debounce((value: string) => {
  const hashValue = encode(value)
  if (window === null) return

  window.history.replaceState(null, '', `/editor/md?value=${hashValue}`)

}, 3000)

interface EditorLayoutProps {
  initialValue: string
  title?: string
}


export const PermanentDocument: FC<EditorLayoutProps> = (props) => {
  const { initialValue } = props
  const { preview, onChangeHandler, onMountHandler } = useEditor()

  return (
    <div className={'w-full flex flex-row gap-4 overflow-hidden'}>
      <div
        className='w-1/2 bg-secondary rounded-2xl  min-h-full overflow-y-scroll max-h-[calc(100vh-4rem)]'>
        <Editor
          onMount={onMountHandler}
          options={globalEditorOptions}
          defaultLanguage={EDITOR.LANGUAGES.MD}
          width={'100%'}
          height={'calc(100vh - 6rem)'}
          onChange={(value, ev) => {
            console.log('change')
            onChangeHandler(value)
            debounceEncode(value as string)
          }}
          className={`h-editor-layout ${jetbrainsMono.className}`}
          defaultValue={initialValue}
        />
      </div>
      <div
        className='w-1/2  bg-secondary rounded-2xl  min-h-full overflow-y-scroll max-h-[calc(100vh-4rem)]'>
        <RenderMDtoHTML markdown={preview ?? ''} />
      </div>
    </div>
  )
}