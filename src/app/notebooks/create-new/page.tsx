import { InputAtom, InputType } from '@components/atoms/Input.atom'
import { userWithAuthServer } from '@lib/utils/UserWithAuth.util'
import { FormCreateNotebookWrapper } from '../components/FormWrapper.component'

export const metadata = {
  title: 'Create New Notebook | DavWorkspace',
  description: 'Create New Notebook'
}

const CreateNewPage = async (): Promise<JSX.Element> => {
  const { user } = await userWithAuthServer({ urlRedirect: '/' })

  return (
    <div className='flex flex-row h-full w-full'>
      <div className='w-[50%] flex justify-center items-center h-full flex-col'>
        <FormCreateNotebookWrapper userId={user?.id ?? ''}>
          <div className='w-full flex justify-start'>
            <h2 className='text-6xl font-bold '>
              <span className=' text-primary'>Create</span>
              <span className='mx-2'>New</span>
            </h2>
          </div>
          <InputAtom
            id='title_notebook'
            label='Title'
            placeholder='Title'
            type={InputType.text}
            classInput='px-2 py-1 border border-white border-solid bg-transparent rounded-lg'
            classLabel='flex flex-col gap-2 w-full'
          />
          <InputAtom
            id='description'
            label='Description'
            classInput='px-2 py-1 border border-white border-solid bg-transparent rounded-lg'
            placeholder='Description'
            classLabel='flex flex-col gap-2 w-full'
            type={InputType.text}
          />
          <button className='px-4 py-2 bg-primary rounded-lg text-white font-bold'>
            <span>Submit</span>
          </button>
        </FormCreateNotebookWrapper>
      </div>
      <div className='w-[50%]'>preview</div>
    </div>
  )
}

export default CreateNewPage
