'use client'

import { type FC, useState } from 'react'
import Editor from '@monaco-editor/react'
import { JetBrains_Mono } from 'next/font/google'
import { motion } from 'framer-motion'

import { EDITOR, globalEditorOptions } from '@constants/editor.const'
import { useEditor } from '@lib/hooks/useEditor.hook'
import { RenderMDtoHTML } from '@components/RederMDtoHTML'
import { ShareIcon } from '@components/icons/Share.icon'
import { compositionRootLogger } from '@lib/modules/logger/root'
import { debounceEncode } from '@lib/utils/debounceEncode.util'
import { shareDocument } from '@lib/utils/shareDocumentAction.util'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin']
})


interface HeaderEditorDocumentProps {
  isEditor: boolean
  setIsEditor: (isEditor: boolean) => void

}

export const HeaderEditorDocument: FC<HeaderEditorDocumentProps> = (
  props
) => {
  const { logger } = compositionRootLogger()
  const { isEditor, setIsEditor } = props

  return (
    <header className={'flex w-[80%] mx-auto flex-row  justify-around px-4 bg-bg-editor rounded-2xl'}>
      <nav className={'flex flex-row gap-4 items-center'}>
        <motion.button
          onClick={() => {
            setIsEditor(true)
          }}
          className={'px-8 py-2 rounded-2xl hover:bg-white hover:text-bg-editor transition-colors hover:duration-600 ' +
            `${isEditor ? ' bg-white text-bg-editor' : 'bg-transparent text-white'}`}
        >
          Editor
        </motion.button>
        <button
          className={'px-8 py-2 rounded-2xl hover:bg-white hover:text-bg-editor transition-colors hover:hover:duration-300 ' +
            `${!isEditor ? 'bg-white text-bg-editor' : 'bg-transparent text-white'}`}
          onClick={() => {
            setIsEditor(false)
          }}>
          Preview
        </button>
      </nav>
      <div className={'flex flex-row gap-4 items-center'}>
        <button
          onClick={(): void => {
            shareDocument()
              .then(() => {
                logger.success('Document\'s URL copied to clipboard')
              })
              .catch(() => {
                logger.error('Document\'s URL not copied to clipboard')
              })
          }}
        >
          <ShareIcon className={'w-6 h-6'} />
        </button>
      </div>
    </header>
  )
}

interface PermanentDocumentProps {
  initialValueBase64: string
}

export const PermanentDocument: FC<PermanentDocumentProps> = (props) => {

  const [isEditor, setIsEditor] = useState<boolean>(true)

  const { preview, onChangeHandler, onMountHandler } = useEditor(props.initialValueBase64 ?? '')

  return (
    <div className={'w-full flex flex-col gap-4 overflow-hidden'}>
      <HeaderEditorDocument
        isEditor={isEditor}
        setIsEditor={setIsEditor}
      />
      {isEditor && (
        <div
          className='w-[80%] bg-[#0d0d0d] rounded-2xl min-h-[calc(100vh-10rem)] mx-auto border border-solid border-gray-200'>
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
            className={`h-editor-layout ${jetbrainsMono.className} rounded-2xl p-2`}
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
    </div>
  )
}