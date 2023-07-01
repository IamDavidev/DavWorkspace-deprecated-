'use client'

import { type FC, useState } from 'react'
import { EditIcon } from '@components/icons'
import { decode } from 'js-base64'
import { SaveIcon } from '@components/icons/Save.icon'
import { COLORS } from '@constants/colors.const'
import { editTitleAction } from '@lib/utils/editTitleAction.util'

function onChangeAction(e: Event, setTitle: (value: string) => void): void {
  const target = e.target as HTMLInputElement
  const value = target.value
  setTitle(value)
}

interface TitleDocumentProps {
  title: string
}


export const TitleDocument: FC<TitleDocumentProps> = (props) => {
  const [newTitle, setNewTitle] = useState(
    decode(
      props.title
    )
  )

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className={'h-16 overflow-hidden'}>
      {
        isEdit ? (
          <div className={'w-[80%] mx-auto flex flex-row gap-4 items-center p-4'}>
            <button
              onClick={(): void => {
                editTitleAction(newTitle, setIsEdit, setNewTitle)
              }}
              className={'bg-transparent border-none font-bold w-12 h-6'}
            >
              <SaveIcon className={'w-6 h-6'} strokeColor={COLORS.WHITE} />
            </button>
            <input
              id={'edit-title'}
              type={'text'}
              className={'border-none bg-transparent text-2xl w-auto font-medium'}
              defaultValue={newTitle}
              autoFocus
              onChange={(e: any): void => {
                onChangeAction(e, setNewTitle)
              }}
            />
          </div>
        ) : (
          <div className={'w-[80%] mx-auto flex flex-row gap-4 items-center p-4'}>
            <button
              onClick={(): void => {
                setIsEdit(true)
              }}
              className={'w-12 h-6 bg-transparent border-none'}
            >
              <EditIcon className={'w-6 h-6'} color={COLORS.WHITE} />
            </button>
            <span
              className={'text-2xl font-medium text-center text-primary text-white opacity-90 border border-solid border-transparent'}
            >
              {newTitle}
            </span>
          </div>
        )
      }
    </div>
  )
}