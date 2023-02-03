'use client'

import { type NextPage } from 'next'
import Editor from '@monaco-editor/react'

const EditorPage: NextPage = (): JSX.Element => {
  return (
    <div>
      Editor Page
      <Editor
        height={'50vh'}
        width={'50%'}
        defaultLanguage={'markdown'}
        defaultValue={'# File Markdown'}
        onChange={(v) => {
          console.log('Change any')
        }}
        className={'editor-cl'}
      />
    </div>
  )
}

export default EditorPage
