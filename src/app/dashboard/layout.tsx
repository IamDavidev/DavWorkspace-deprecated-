import SlideNav from '@components/SlideNav.component'
import { compositionRootUser } from '@lib/modules/user/compositionRootUser'
import { redirect } from 'next/navigation'
import { type ReactNode } from 'react'


interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout = async ({
  children
}: DashboardLayoutProps): Promise<JSX.Element> => {
  const { userRepository } = compositionRootUser()
  const user = await userRepository.getCurrentUser()

  if (user === null) return redirect('/auth/login/')

  return (
    <div className='h-full w-full relative'>
      <SlideNav imageSrc={user.avatar_url ?? ""} name={user.nickname ?? ""} email={user.email} key={user.id} />
      <div>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout