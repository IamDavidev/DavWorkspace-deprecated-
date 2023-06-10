import SlideNav from '@components/SlideNav.component'
import { compositionRootUser } from '@lib/modules/user/compositionRootUser'
import { redirect } from 'next/navigation'
import { type ReactNode } from 'react'

interface DashboardLayoutProps {
  children: ReactNode
  params: {
    id: string
  }
}

const DashboardLayout = async (props: DashboardLayoutProps): Promise<JSX.Element> => {
  const { children } = props
  const { userRepository } = compositionRootUser()
  const user = await userRepository.getCurrentUser()

  if (user === null) return redirect('/auth/login/')

  return (
    <div className='h-full w-full relative flex flex-row gap-0'>
      <SlideNav imageSrc={user.avatar_url ?? ''} name={user.nickname ?? ''} email={user.email} key={user.id} />
      <div className='w-full h-full'>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout