import { type FC } from 'react'

import { type DocumentEntity } from '@lib/modules/documents/main/entities/documet.entity'
import { formatMarkdownToText } from '@lib/utils/formatMarkdownToText'

export const TagItem: FC<{
  name: string
}> = ({ name }): JSX.Element => {
  return (
    <div>
      <span>
        {name}
      </span>
    </div>
  )
}


export const DocumentItem: FC<DocumentEntity> = (props): JSX.Element => {
  const { title, status, current_content: currentContent, id } = props

  const contentFmt = formatMarkdownToText(currentContent)

  return (
    <a href={`documents/${id}/`}>
      <article
        id={id}
        className='rounded-lg p-4 hover:transition-all hover:duration-500 hover:ease-out hover:bg-dark-gray'>
        <header>
          <div className='w-full flex flex-row justify-between'>
          <span
            className='text-light-blue font-bold'
          >{status}</span>
            <span>
            1 day ago
          </span>
          </div>
          <h2 className='text-2xl font-bold '>{title}</h2>
        </header>
        <p>
          {contentFmt}
        </p>
      </article>
    </a>
  )
}
