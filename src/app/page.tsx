import { type NextPage } from 'next'

import Link from 'next/link'

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Link href={'/editor'}>Go to Editor</Link>
    </>
  )
}

export default Home
