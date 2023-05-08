import { type FC } from 'react'

import { type DocumentEntity } from '@lib/modules/documents/main/entities/documet.entity';

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

export const DocumentItem: FC<DocumentEntity> = ({
  title,
  status,
  updated_at: updatedAt,
  tags
}): JSX.Element => {
  return (
    <article className='rounded-lg p-2 border border-white border-solid'>
      <header>
        <div>
          <span>{status}</span>
          <span>
            {String(new Date(updatedAt))}
          </span>
        </div>
        <h2 className='text-2xl font-bold '>{title}</h2>
      </header>
      <div>
        {tags.map((tag): JSX.Element => {
          return (
            <TagItem key={tag} name={tag} />
          )
        })}
      </div>
    </article>
  )
};
