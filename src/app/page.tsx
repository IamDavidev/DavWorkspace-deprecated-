import Link from 'next/link'

export const metadata = {
  title: 'Home | DavWork',
  description: 'Home page'
}

const Home = (): JSX.Element => {
  return (
    <section className='p-4'>
      <Link href={'/auth/login'} >
        Login
      </Link>
    </section>
  )
}

export default Home
