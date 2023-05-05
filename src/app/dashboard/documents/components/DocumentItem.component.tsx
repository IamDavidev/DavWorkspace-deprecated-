import { type DocumentEntity } from '@lib/modules/documents/main/entities/documet.entity';
import { type FC } from 'react'

export const DocumentItem: FC<DocumentEntity> = ({
  title,
  status,
  updated_at
}): JSX.Element => {
  console.info("🚀 ~>  file: DocumentItem.component.tsx:9 ~>  updated_at:", updated_at)
  return (
    <article className='rounded-lg p-2 border border-white border-solid'>
      <header>
        <div>
          <span>{status}</span>
          <span>
            {new Date(updated_at)}
          </span>
        </div>
        <h2 className='text-2xl font-bold '>{title}</h2>
      </header>
    </article>
  )
};
