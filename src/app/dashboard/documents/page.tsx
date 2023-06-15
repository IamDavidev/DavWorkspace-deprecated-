
export const metadata = {
  title: 'Dashboard Documents Page',
  description: 'Dashboard Documents Page'
}

const DashboardDocumentsPage = (): JSX.Element => {
  return (
    <section className='w-full h-full flex flex-col justify-center items-center'>
      <div className=''>
        <h2 className='text-2xl  text-center'>
          Select <span className='block text-light-blue font-bold'>**Document**</span> for inspect <span
          className='italic text-light-blue'> _preview_</span>
        </h2>
      </div>
    </section>
  )
}

export default DashboardDocumentsPage