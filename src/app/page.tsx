import { type NextPage } from 'next'

import Link from 'next/link'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <div className={inter.className + ' main'}>
        <h1>
          Dav WorkSpace
        </h1>
        <span>MarkDown Editor</span>
        <br />
        <Link href={'/editor'}>
          Go to Editor
        </Link>
      </div>
    </>
  )
}

export default Home
