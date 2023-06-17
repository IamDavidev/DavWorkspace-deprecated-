'use client'

import Atropos from 'atropos/react'
import 'atropos/css'
import { type  FC } from 'react'

export const PreviewEditorImg: FC = () => {
  return (
    <div className='w-[80%] mx-auto rounded-2xl pb-16'>
      <Atropos>
        <img src={'/previewEditor.png'} alt={'preview editor'}
             className={'w-full rounded-2xl border-light-violet border border-solid'} />
      </Atropos>
    </div>
  )
}