import { type FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import '@/styles/MarkdownStyles.css'

interface IPropsPreviewMode {
  value: string
}
export const PreviewMode: FC<IPropsPreviewMode> = ({ value }): JSX.Element => {
  return (
    <div className='w-1/2 p-8 bg-secondary rounded-2xl  min-h-full overflow-y-scroll max-h-[calc(100vh-4rem)]'>
      <ReactMarkdown
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            const match = /language-(\w+)/.exec(className ?? '')
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            return !inline && match != null ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag='div'>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
        className='preview-md markdown-body'
        remarkPlugins={[remarkGfm]}>
        {value}
      </ReactMarkdown>
    </div>
  )
}
