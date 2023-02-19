import { type FC } from 'react'
import ReactMarkdown from 'react-markdown'
import '@/styles/MarkdownStyles.css'

interface IPropsPreviewMode {
  value: string
}

export const PreviewMode: FC<IPropsPreviewMode> = ({ value }): JSX.Element => {
  return (
    <div className='w-1/2 p-2'>
      <ReactMarkdown className='preview-md markdown-body'>
        {value}
      </ReactMarkdown>
    </div>
  )
}
