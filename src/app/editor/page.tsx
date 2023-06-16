import { type FC } from 'react'
import { redirect } from 'next/navigation'

const EditorPage: FC = () => {
  redirect('/editor/md')
  return <></>
}

export default EditorPage
