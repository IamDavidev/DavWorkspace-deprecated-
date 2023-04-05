'use client'

import { apiCreateNotebook } from '@lib/api/createNoteebook.api'
import { stylesToaster } from '@lib/constants/toasterStyles.const'
import { type FormEvent, type FC, type ReactNode } from 'react'

import { toast } from 'sonner'

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

export const FormCreateNotebookWrapper: FC<FormWrapperProps> = ({
  children,
  userId
}): JSX.Element => {
  const onSubmitHandler = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    const form = e.target as HTMLFormElement

    const { title_notebook: title, description } = form

    const titleValue = title.value
    if (titleValue.length < 1) {
      inputEmptyExceptionClient('Title')
      return
    }
    const descriptionValue = description.value as string
    if (descriptionValue.length < 1) {
      inputEmptyExceptionClient('Description')
    }

    const {
      isOk,
      error: { message }
    } = await apiCreateNotebook({
      title: titleValue,
      description: descriptionValue,
      image: null,
      ownerId: userId
    })

    if (!isOk) {
      toast.error(message, {
        style: {
          ...stylesToaster.error
        }
      })
    }

    // router.push('/notebooks')
  }

  return (
    <form
      className='flex flex-col justify-start items-center gap-8'
      onSubmit={e => {
        onSubmitHandler(e).catch(console.error)
      }}>
      {children}
    </form>
  )
}
