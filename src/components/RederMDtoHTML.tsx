'use client'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import '@/styles/MarkdownStyles.css'

interface RenderMDtoHTMLProps {
  markdown: string
}

export const RenderMDtoHTML = (props: RenderMDtoHTMLProps): JSX.Element => {
  const { markdown } = props
  return (
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
      className='preview-md markdown-body min-h-[calc(100vh-10rem)] p-4'
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {markdown}
    </ReactMarkdown>
  )
}