import Link from 'next/link'

export const metadata = {
  title: 'Home | DavWork',
  description: 'Home page'
}

const Home = (): JSX.Element => {
  return (
    <>
      <Link href={'/dashboard/editor/123'}>Go to Editor</Link>
    </>
  )
}

export default Home
