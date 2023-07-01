import Link from 'next/link'
import { type FC } from 'react'
import { type  Metadata } from 'next'

import { DotsNavbar } from '@components/navbar/DotsNavbar.component'
import { TitleDocument } from '@/app/editor/md/components/TitleEditorDocument.component'
import { PermanentDocument } from '@/app/editor/md/components/PermanentDocument'

export const metadata: Metadata = {
  title: 'Markdown Editor | DavWorkspace'
}

const DEFAULT_TITLE_IN_BASE64 = 'RG9jdW1lbnQgVW50aXRsZWQ'
// # hello world- > RG9jdW1lbnQgVW50aXRsZWQ=
const INITIAL_MARKDOWN = 'IyBIZWxsbyBXb3JsZCE%3D'

interface MarkdownPageProps {
  searchParams: {
    title: string
    value: string
  }
}

const MarkdownPage: FC<MarkdownPageProps> = (props) => {

  const { searchParams } = props

  const title = searchParams.title ?? DEFAULT_TITLE_IN_BASE64
  const initialMarkdown = searchParams.value ?? INITIAL_MARKDOWN

  return (
    <>
      <Link href={'/'}>
        <DotsNavbar />
      </Link>
      <TitleDocument title={title} />
      <PermanentDocument initialValueBase64={initialMarkdown} />
    </>
  )
}


export default MarkdownPage