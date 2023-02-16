import { type FC } from 'react'
import ReactMarkdown from 'react-markdown'

interface IPropsPreviewMode {
  value: string
}

export const PreviewMode: FC<IPropsPreviewMode> = ({ value }): JSX.Element => {
  console.log({ value })
  return (
    <div>
      <ReactMarkdown>{value}</ReactMarkdown>
    </div>
  )
}
