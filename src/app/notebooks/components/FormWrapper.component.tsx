'use client'

import { type FC, type FormEvent, type ReactNode } from 'react'
import { toast } from 'sonner'

import { apiCreateNotebook } from '@lib/api/createNoteebook.api'
import { stylesToaster } from '@lib/constants/toasterStyles.const'

export interface FormWrapperProps {
  children: ReactNode
  userId: string
}

export function inputEmptyExceptionClient(nameInput: string): void {
  const message = `${nameInput}  can't be empty`

  toast.error(message, {
    style: {
      ...stylesToaster.error
    }
  })
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
  evt.preventDefault()
  const form = evt.target as HTMLFormElement

  const { title_notebook: title, description } = form

  const titleInput = title.value
  const descriptionInput = description.value

  checkInputEmpty(titleInput) && inputEmptyExceptionClient('Title')
  checkInputEmpty(description.value) && inputEmptyExceptionClient('Description')

  const {
    isOk,
    error: { message }
  } = await apiCreateNotebook({
    title: titleInput,
    description: descriptionInput,
    image: null,
    ownerId: userId
  })

  !isOk &&
    toast.error(message, {
      style: {
        ...stylesToaster.error
      }
    })
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
        }).catch(() => {})
      }}>
      {children}
    </form>
  )
}
