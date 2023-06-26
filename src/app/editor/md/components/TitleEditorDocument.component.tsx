'use client'

import { type FC, useState } from 'react'
import { EditIcon } from '@components/icons'
import { decode, encode } from 'js-base64'

import { getParamFromSearchParam } from '@lib/utils/getParamFromSearchParam.util'

function onChangeAction(e: Event, setTitle: (value: string) => void): void {
  const target = e.target as HTMLInputElement
  const value = target.value
  setTitle(value)
}

function editTitleAction(
  newTitle: string,
  setIsEdit: (value: boolean) => void,
  setNewTitle: (value: string) => void
): void {
  setIsEdit(false)
  setNewTitle(newTitle)
  const url = new URL(window.location.href)
  url.searchParams.set('title', encode(newTitle))
  window.history.pushState({}, '', url.toString())
}


const DEFAULT_TITLE_IN_BASE64 = 'RG9jdW1lbnQgVW50aXRsZWQ'


export const TitleDocument: FC = () => {
  const [newTitle, setNewTitle] = useState(
    decode(
      getParamFromSearchParam('title') ?? DEFAULT_TITLE_IN_BASE64
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
              Save
            </button>
            <input
              type={'text'}
              className={'border-none bg-transparent text-2xl w-auto font-medium'}
              defaultValue={newTitle}
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
              <EditIcon className={'w-6 h-6'} color={'#fff'} />
            </button>
            <span
              className={'text-2xl font-medium text-center text-primary text-white opacity-90 border-2 border-solid border-dark'}
            >
              {newTitle}
            </span>
          </div>
        )
      }
    </div>
  )
}