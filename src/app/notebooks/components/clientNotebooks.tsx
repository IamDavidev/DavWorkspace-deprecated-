'use client'

import { NotebookBrowserRepository } from '@lib/repositories/NotebooksClient.repository'

export const ClientNotebooks = (): JSX.Element => {
  return (
    <>
      <button
        className='border-2 border-gray-300 bg-white text-black py-2 px-4 rounded-md block m-12'
        onClick={() => {
          NotebookBrowserRepository.createNewNotebook().catch(() => {})
        }}>
        create new notebook
      </button>
    </>
  )
}
