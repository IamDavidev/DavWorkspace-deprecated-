import { type FC, type ReactNode } from 'react'


interface LayoutDashboardDocumentsProps {
  children: ReactNode
}

const LayoutDashboardDocuments: FC<LayoutDashboardDocumentsProps> = ({
  children
}): JSX.Element => {
  return (
    <>
      <header className="h-[72px]">
        search input
      </header>
      <div className='py-8 px-4'>
        {children}
      </div>
    </>
  )
}

export default LayoutDashboardDocuments
