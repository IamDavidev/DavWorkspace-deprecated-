import { type FC } from 'react'
import ReactMarkdown from 'react-markdown'
import '@/styles/MarkdownStyles.css'

interface IPropsPreviewMode {
  value: string
}

export const PreviewMode: FC<IPropsPreviewMode> = ({ value }): JSX.Element => {
  return (
    <div>
      <ReactMarkdown className='preview-md'>{value}</ReactMarkdown>
    </div>
  )
}
