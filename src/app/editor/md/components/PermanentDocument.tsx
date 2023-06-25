'use client'

import { type FC, useState } from 'react'
import Editor from '@monaco-editor/react'
import { JetBrains_Mono } from 'next/font/google'
import { debounce } from '@lib/utils/debounce'
import { encode } from 'js-base64'

import { EDITOR, globalEditorOptions } from '@constants/editor.const'
import { useEditor } from '@lib/hooks/useEditor.hook'
import { RenderMDtoHTML } from '@components/RederMDtoHTML'
import { ShareIcon } from '@components/icons/Share.icon'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin']
})

interface WaitTimeInMS {
  DEFAULT: number
}

const WAIT_TIME_IN_MS: WaitTimeInMS = {
  DEFAULT: 3000
}

const debounceEncode = debounce((value: string) => {
  const hashValue = encode(value)
  if (window === null) return
  const url = new URL(window.location.href)
  url.searchParams.set('value', hashValue)
  window.history.pushState({}, '', url.toString())
  /*  
    window.history.replaceState(null, '', `/editor/md?value=${hashValue}`)
  */
}, WAIT_TIME_IN_MS.DEFAULT)


export const PermanentDocument: FC = () => {

  const [isEditor, setIsEditor] = useState<boolean>(true)

  const { preview, onChangeHandler, onMountHandler } = useEditor()

  return (
    <div className={'w-full flex flex-col gap-4 overflow-hidden'}>
      <header className={'flex w-full flex-row  justify-around px-4'}>
        <nav className={'flex flex-row gap-4 items-center'}>
          <button
            onClick={() => {
              setIsEditor(true)
            }}
            className={'text-white px-4 py-2 rounded-2xl hover:bg-dark-gray transition-colors duration-300' +
              `${isEditor ? ' bg-dark-gray' : 'bg-transparent'}`}
          >
            Editor
          </button>
          <button
            className={' text-white px-4 py-2 rounded-2xl hover:bg-dark-gray transition-colors duration-300' +
              `${!isEditor ? ' bg-dark-gray' : 'bg-transparent'}`}
            onClick={() => {
              setIsEditor(false)
            }}>
            Preview
          </button>
        </nav>
        <div className={'flex flex-row gap-4 items-center'}>
          <button
            onClick={() => {
    
            }}
          >
            <ShareIcon className={'w-6 h-6'} />
          </button>
        </div>
      </header>
      {isEditor && (
        <div
          className='w-[80%] bg-secondary rounded-2xl min-h-[calc(100vh-10rem)] mx-auto border border-solid border-gray-500'>
          <Editor
            onMount={onMountHandler}
            options={globalEditorOptions}
            defaultLanguage={EDITOR.LANGUAGES.MD}
            width={'100%'}
            height={'calc(100vh - 10rem)'}
            onChange={(value: any, ev: any) => {
              onChangeHandler(value)
              debounceEncode(value)
            }}
            className={`h-editor-layout ${jetbrainsMono.className} rounded-2xl py-2`}
            defaultValue={preview}
          />
        </div>
      )}
      {!isEditor && (
        <div
          className='w-[80%] mx-auto rounded-2xl  bg-secondary  overflow-y-scroll min-h-[calc(100vh-10rem)] bg-[#0d0d0d] border border-gray-500 border-solid'>
          <RenderMDtoHTML markdown={preview ?? ''} />
        </div>
      )}

      {/*  <div
        className='w-1/2 bg-secondary rounded-2xl  min-h-full max-h-[calc(100vh-8rem)]'>
        <Editor
          onMount={onMountHandler}
          options={globalEditorOptions}
          defaultLanguage={EDITOR.LANGUAGES.MD}
          width={'100%'}
          height={'calc(100vh - 8rem)'}
          onChange={(value, ev) => {
            onChangeHandler(value)
            debounceEncode(value as string)
          }}
          className={`h-editor-layout ${jetbrainsMono.className} rounded-2xl py-2`}
          defaultValue={initialValue}
        />
      </div>
      <div
        className='w-1/2 px-1 rounded-l  bg-secondary  min-h-full overflow-y-scroll max-h-[calc(100vh-8rem)] bg-[#0d0d0d] border border-white border-solid'>
        <RenderMDtoHTML markdown={preview ?? ''} />
      </div> 
      */}
    </div>
  )
}