import { type FC } from 'react'

import { type DocumentEntity } from '@lib/modules/documents/main/entities/documet.entity'
import { formatMarkdownToText } from '@lib/utils/formatMarkdownToText'
import { ButtonFavorite } from '@/app/dashboard/documents/[id]/components/ButtonFavorite'

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

export function formatCropString(str: string, end: number, placeholder: string): string {
  if (str.length <= end) return str
  return str.substring(0, end) + placeholder
}


export const DocumentItem: FC<DocumentEntity & {
  userId: string
}> = (props) => {
  const { title, status, current_content: currentContent, id, isFavorite, userId } = props

  const contentFmt = formatCropString(
    formatMarkdownToText(currentContent),
    100,
    '...'
  )


  return (
    <article
      id={id}
      className='rounded-lg py-2 px-4 hover:transition-all hover:duration-500 hover:ease-out hover:bg-dark-gray flex flex-col gap-2'>
      <header>
        <div className='w-full flex flex-row justify-between'>
          <span className='text-light-violet '> {status}</span>
          <ButtonFavorite documentId={id} isFavorite={isFavorite} userId={userId} />
        </div>
        <h2 className='text-2xl font-bold '>{title}</h2>
      </header>
      <a href={`documents/${id}/`}
         className={'text-white opacity-80 hover:text-light-violet'}
      >
        {contentFmt}
      </a>
    </article>
  )
}
