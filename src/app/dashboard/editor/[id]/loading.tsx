const LoadingEditor = (): JSX.Element => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <svg
          className='animate-spin h-5 w-5 mr-3 text-white'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'>
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8v8z'></path>
        </svg>
        <p className='text-white'>Loading...</p>
      </div>
      <p>
        <span className='text-white'>Loading...</span>
      </p>
    </>
  )
}

export default LoadingEditor
