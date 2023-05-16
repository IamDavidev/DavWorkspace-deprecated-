import Link from 'next/link'

export const metadata = {
  title: 'Home | DavWork',
  description: 'Home page'
}

const Home = (): JSX.Element => {
  return (
    <section className='p-4 flex flex-row gap-6 h-full w-full justify-center items-center '>
      <Link href={'/auth/login/'}
        className="bg-white text-dark-gray rounded-lg py-2 px-6 hover:bg-dark-gray hover:text-white transition-all hover:duration-500"
      >
        Login
      </Link>
      <Link href={'/dashboard/'}
        className="bg-white text-dark-gray rounded-lg py-2 px-6 hover:bg-dark-gray hover:text-white transition-all hover:duration-500"
      >
        Dashboard
      </Link>
    </section>
  )
}

export default Home
