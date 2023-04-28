'use client'

import { type FC, type FormEvent, type ReactNode } from 'react'

import { apiCreateNotebook } from '@lib/api/createNoteebook.api'
import { compositionRootLogger } from '@lib/modules/logger/root'

export interface FormWrapperProps {
  children: ReactNode
  userId: string
}



export const checkInputEmpty = (value: string): boolean => value.length < 1

interface IHandlerProps {
  evt: FormEvent
}

interface IHandlerOnSubmit extends IHandlerProps {
  userId: string
}

export async function hanlderOnSubmit({
  evt,
  userId
}: IHandlerOnSubmit): Promise<void> {

  const { logger } = compositionRootLogger()
  evt.preventDefault()
  const form = evt.target as HTMLFormElement

  const { title_notebook: title, description } = form

  const titleInput = title.value
  const descriptionInput = description.value

  if (checkInputEmpty(titleInput)) {
    return
  }
  if (checkInputEmpty(descriptionInput)) {
    return
  }

  const {
    isOk,
    error: { message }
  } = await apiCreateNotebook({
    title: titleInput,
    description: descriptionInput,
    image: null,
    ownerId: userId
  })


  if (isOk) {
    logger.success(message)
  }


}

export const FormCreateNotebookWrapper: FC<FormWrapperProps> = ({
  children,
  userId
}): JSX.Element => {
  return (
    <form
      className='flex flex-col justify-start items-center gap-8'
      onSubmit={e => {
        hanlderOnSubmit({
          evt: e,
          userId
        }).catch(() => { })
      }}>
      {children}
    </form>
  )
}
