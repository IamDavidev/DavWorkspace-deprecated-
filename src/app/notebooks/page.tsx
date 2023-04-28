
import { NavbarNotebooks } from './components/NavbarNotebooks.component'

export const metadata = {
  title: 'Notebooks | DavWorkspace',
  description: 'Notebooks'
}

const NotebooksPage = async (): Promise<JSX.Element> => {
  return (
    <>
      <NavbarNotebooks />
      <section className='flex flex-wrap gap-6 '>
      </section>
    </>
  )
}

export default NotebooksPage
