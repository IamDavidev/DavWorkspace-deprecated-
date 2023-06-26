import { type FC } from 'react'
import { type  Metadata } from 'next'

import { DotsNavbar } from '@components/navbar/DotsNavbar.component'
import { TitleDocument } from '@/app/editor/md/components/TitleEditorDocument.component'
import { PermanentDocument } from '@/app/editor/md/components/PermanentDocument'

export const metadata: Metadata = {
  title: 'Markdown Editor | DavWorkspace'
}

const MarkdownPage: FC = (props) => {

  return (
    <>
      <DotsNavbar />
      <TitleDocument />
      <PermanentDocument />
    </>
  )
}


export default MarkdownPage