import PageLayout from '@/layouts/Page.layout'
import ButtonSignUpGithub from '@components/ButtonSignUpGithub.component'
import { FormSignUserEmail } from '@components/FormSignUpUserEamil.component'

const SignUpUserPage = (): JSX.Element => {
  return (
    <PageLayout
      title='Sign up | DavWorkspace'
      description=''
      className='flex justify-center items-center flex-col'>
      <h2 className='mb-12'>
        <span className='text-5xl font-bold'>Sign up</span>
      </h2>
      <ButtonSignUpGithub />
      <div className='my-8 w-[480px] h-[1px] bg-white opacity-60' />
      <FormSignUserEmail />
    </PageLayout>
  )
}

export default SignUpUserPage
