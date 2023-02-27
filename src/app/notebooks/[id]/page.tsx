import { type NextPage } from 'next'

interface IPropsNotebookIdPage {
  params: {
    id: string
  }
}
const NotebookIdPage: NextPage<IPropsNotebookIdPage> = ({
  params
}: IPropsNotebookIdPage): JSX.Element => {
  const notebookId = params.id

  return (
    <div>
      <h1>Notebook {notebookId}</h1>
    </div>
  )
}

export default NotebookIdPage
