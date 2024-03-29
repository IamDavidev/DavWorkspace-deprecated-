import { type FC } from 'react'

import Editor, { type EditorProps } from '@monaco-editor/react'
import { JetBrains_Mono } from 'next/font/google'
import { motion } from 'framer-motion'
import { METHODS } from '@constants/methods.const'
import type { DocumentToUpdating } from '@lib/modules/documents/main/entities/documet.entity'
import { globalEditorOptions } from '@constants/editor.const'
import { URL_ACTION_SAVE_DOCUMENT } from '@constants/actionURL.const'


const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin']
})


type PropsEditorLayout = EditorProps & {
  title: string
  documentId: string
  userId: string
}


export interface BodyUpdateDocument {
  userId: string | undefined
  documentId: string | undefined
  documentToUpdate: DocumentToUpdating
}


export async function saveDocument(newValue: string, documentId: string, userId: string): Promise<void> {
  if (newValue === '') return

  const body: BodyUpdateDocument = {
    userId,
    documentId,
    documentToUpdate: {
      current_content: newValue
    }
  }

  await fetch(URL_ACTION_SAVE_DOCUMENT, {
    method: METHODS.POST,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res): void => {
    console.log(res)
  })
}


const EditorLayout: FC<PropsEditorLayout> = (props): JSX.Element => {
  const {
    className,
    height,
    title,
    value,
    documentId,
    userId,
    ...restProps
  } = props

  return (
    <motion.div
      className='w-1/2 h-full sticky top-8 flex flex-col gap-1rem 
    [&>section]:rounded-2xl [&>section]:overflow-hidden
    '>
      <header className='h-12 flex flex-row justify-between px-2 items-center'>
        <span>
           {title}
        </span>
        <button
          className='bg-light-violet text-dark text-sm px-3 py-1 rounded-md'
          onClick={(): void => {
            saveDocument(value ?? '', documentId, userId).catch(() => {
            })
          }}
        >
          Save Changes
        </button>
      </header>
      <Editor
        options={globalEditorOptions}
        height={height}
        {...restProps}
        className={`${className ?? ' '}  ${jetBrainsMono.className}`}
      />
    </motion.div>
  )
}

export default EditorLayout
