import { type FC } from 'react'
import { decode } from 'js-base64'
import { type  Metadata } from 'next'

import { PermanentDocument } from '@/app/editor/md/components/PermanentDocument'

export const metadata: Metadata = {
  title: 'Markdown Editor | DavWorkspace'
}

interface MarkdownPageProps {
  searchParams: Record<string, string | string[]>
}

const MarkdownPage: FC<MarkdownPageProps> = (props) => {
  const { searchParams } = props
  const { value } = searchParams

  const rawMarkdown = decode(value as string)

  return (
    <div>
      <h1
        className={'text-3xl font-bold text-center text-primary pb-4 text-light-violet'}
      >Markdown Editor</h1>
      <PermanentDocument initialValue={rawMarkdown} />
    </div>
  )
}


export default MarkdownPage