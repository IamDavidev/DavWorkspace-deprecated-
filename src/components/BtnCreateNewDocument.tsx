'use client'
import type { FC } from 'react'

import { COLORS } from '@constants/colors.const'
import { NewIcon } from '@components/icons'

import { useRouter } from 'next/navigation'
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context'


export async function createNeDocumentAction(router: AppRouterInstance): Promise<void> {

  await fetch('/api/create-new-document', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  }).then((res: Response): any => res.json())
    .then(res => {
      const { status, id } = res
      if (status !== 200) return
      const url = `/dashboard/editor/document/${id as string}`
      router.push(url)
    })
}


export const BtnCreateNewDocument: FC = () => {
  const router = useRouter()

  return (
    <>
      <button
        onClick={(): void => {
          createNeDocumentAction(router).catch(err => {
            console.log(err)
          })
        }}
        className={`w-full h-full flex flex-row gap-3 justify-start items-center`}>
        <NewIcon className='w-6 h-6' color={COLORS.WHITE} />
        <span className=' tracking-wide text-white'>
          New document
        </span>
      </button>
    </>
  )
}
