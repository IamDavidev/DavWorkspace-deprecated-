'use client'
import type { FC } from 'react'

import { COLORS } from '@constants/colors.const'
import { NewIcon } from '@components/icons'


export const BtnCreateNewDocument: FC = () => {
  return (
    <>
      <button
        onClick={() => {
          console.log('click 🆕 ')
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
