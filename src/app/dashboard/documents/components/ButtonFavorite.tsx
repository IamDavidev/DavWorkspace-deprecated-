'use client'

import { type FC, useState } from 'react'
import { FavoritesIcon } from '@components/icons'
import { URL_ACTION_SAVE_DOCUMENT } from '@constants/actionURL.const'
import { METHODS } from '@constants/methods.const'
import { type BodyUpdateDocument } from '@/app/dashboard/editor/document/[id]/components/Editor.component'
import { compositionRootLogger } from '@lib/modules/logger/root'

interface FavoriteAction {
  documentId: string
  userId: string
  isFavorite: boolean
  setIsFavorite: (isFavorite: boolean) => void
}

export async function favoriteAction(
  props: FavoriteAction
): Promise<void> {
  const { logger } = compositionRootLogger()
  const { documentId, userId, isFavorite, setIsFavorite } = props
  
  const body = JSON.stringify({
    documentId,
    userId,
    documentToUpdate: {
      isFavorite: !isFavorite
    }
  } satisfies BodyUpdateDocument)

  await fetch(URL_ACTION_SAVE_DOCUMENT, {
    method: METHODS.POST,
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }).then((res) => {
    if (res.status !== 200) {
      logger.error('Error in action')
      return
    }
    logger.success('Updated document successfully')
    setIsFavorite(!isFavorite)
  })
}

interface ButtonAddFavoriteProps {
  documentId: string
  isFavorite: boolean
  userId: string
}

export const ButtonFavorite: FC<ButtonAddFavoriteProps> = (props) => {
  const { isFavorite, userId, documentId } = props
  const [isFavoriteState, setIsFavorite] = useState<boolean>(isFavorite)

  return (
    <button
      onClick={(): void => {
        favoriteAction({
          isFavorite,
          userId,
          documentId,
          setIsFavorite
        }).catch((): void => {
          console.log('Error')
        })
      }}
      className='[&>svg>path]:hover:stroke-[#FFD89C] [&>svg>path]:hover:duration-500 transition-all'
    >
      <FavoritesIcon color={isFavoriteState ? '#FFD89C' : '#fff'} className={'w-6 h-6'} />
    </button>

  )
}