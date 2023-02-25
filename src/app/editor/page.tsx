'use client'

import { type NextPage } from 'next'
import { EDITOR } from '@/constants/edtior.const'

import { PreviewMode } from './components/PreviewLayout'
import EditorLayout from '@/components/Editor.component'
import { useEditor } from '@/lib/hooks/useEditor.hook'

// import oneDarkTheme from '../../utils/oneDarkTheme.json'

/**
 * try with useEditor hook
 *
 */

const EditorPage: NextPage = (): JSX.Element => {
  const { onChangeHandler, onMountHandler, preview } = useEditor()

  return (
    <>
      <div className='w-full h-full flex flex-row py-8 rounded-2xl gap-4 '>
        <EditorLayout
          theme='vs-dark'
          onMount={onMountHandler}
          width={'100%'}
          defaultLanguage={EDITOR.LANGUAGES.MD}
          defaultValue={'# File Markdown'}
          height='calc(100vh - 4rem)'
          className={'h-editor-layout'}
          onChange={onChangeHandler}
        />
        <PreviewMode value={preview !== undefined ? preview : ''} />
      </div>
    </>
  )
}

export default EditorPage
