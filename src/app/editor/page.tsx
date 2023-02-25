'use client'

import { type NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'

import { EDITOR } from '@/constants/edtior.const'

import { PreviewMode } from './components/PreviewLayout'
import EditorLayout from '@/components/Editor.component'
import { useMonaco } from '@monaco-editor/react'

// import oneDarkTheme from '../../utils/oneDarkTheme.json'

/**
 * try with useEditor hook
 *
 */

export interface IUseEditor {
  preview: string | undefined
  editorRef: any
  onMountHandler: (editor: any) => void
  onChangeHandler: (value: string | undefined) => void
}

export function useEditor(): IUseEditor {
  const monaco = useMonaco()
  const [preview, setPreview] = useState<string | undefined>('')
  const editorRef = useRef(null)

  const onMountHandler = (editor: any): void => {
    editorRef.current = editor
    setPreview(editor.getValue())
  }

  const onChangeHandler = (value: string | undefined): void => {
    setPreview(value)
  }

  useEffect(() => {
    // monaco.editor.defineTheme('one-dark', {
    //   base: 'vs-dark',
    //   inherit: true,
    //   ...oneDarkTheme
    // })
    console.log({
      monaco
    })
  }, [])

  return {
    preview,
    editorRef,
    onChangeHandler,
    onMountHandler
  }
}

const EditorPage: NextPage = (): JSX.Element => {
  const { onChangeHandler, onMountHandler, preview } = useEditor()

  return (
    <>
      <div className='w-full h-full flex flex-row px-12'>
        <EditorLayout
          theme='vs-dark'
          onMount={onMountHandler}
          width={'100%'}
          defaultLanguage={EDITOR.LANGUAGES.MD}
          defaultValue={'# File Markdown'}
          height='100vh'
          className={'h-editor-layout'}
          onChange={onChangeHandler}
        />
        <PreviewMode value={preview !== undefined ? preview : ''} />
      </div>
    </>
  )
}

export default EditorPage
