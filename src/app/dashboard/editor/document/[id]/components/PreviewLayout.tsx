'use client'

import { type FC } from 'react'
import { motion, type MotionProps } from 'framer-motion'

import { RenderMDtoHTML } from '@components/RederMDtoHTML'

interface IPropsPreviewMode {
  value: string
}

export const animation: MotionProps = {
  initial: {
    opacity: 0,
    translateX: 70
  },
  animate: {
    opacity: 1,
    translateX: 0

  }
}

export function saveInLocalStorage(key: string, value: string): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(key, value)
}


export const PreviewModeMD: FC<IPropsPreviewMode> = ({ value }): JSX.Element => {
  saveInLocalStorage("document value", value)
  
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: 70
      }}
      animate={{
        opacity: 1,
        translateX: 0
      }}
      transition={{ duration: 1 }}
      className='w-1/2 p-8 bg-secondary rounded-2xl  min-h-full overflow-y-scroll max-h-[calc(100vh-4rem)]'>
      <RenderMDtoHTML markdown={value} />
    </motion.div>
  )
}
