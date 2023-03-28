'use client'

import { useState } from 'react'

export const BtnCreateNotebook = (): JSX.Element => {
  const [isOpenPortal, setIsOpenPortal] = useState(false)

  return (
    <>
      <button
        className='bg-primary text-white rounded-xl py-2 px-4'
        onClick={() => {
          setIsOpenPortal(true)
        }}>
        create notebook
      </button>
      {isOpenPortal && (
        <div className='fixed top-0 left-0 w-full h-full bg-[#121212a6] bg-opacity-50 flex justify-center items-center'>
          <form>
            <h2 className='text-2xl font-bold'>Create notebook</h2>
            <label>
              <span>Title</span>
              <input type='text' />
            </label>
            <label>
              <span>Description</span>
              <input type='text' />
            </label>
          </form>
          <button
            onClick={() => {
              setIsOpenPortal(false)
            }}>
            <span>close</span>
          </button>
        </div>
      )}
    </>
  )
}
