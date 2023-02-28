import PageLayout from '@/layouts/Page.layout'

const SignUpUserPage = (): JSX.Element => {
  return (
    <PageLayout
      title='Sign up | DavWorkspace'
      description=''
      className='flex justify-center items-center flex-col'>
      <button>
        <span></span>
        Sign up with Github
      </button>
      <h1>Register User</h1>
    </PageLayout>
  )
}

export default SignUpUserPage
