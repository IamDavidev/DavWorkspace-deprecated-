import Link from "next/link"


export const metadata = {
  title: 'Dashboard | DavWorkspace',
  description: 'Dashboard page'
}


const DashboardPage = (): JSX.Element => {
  return (
    <>
      <header>
        <h1 className="text-4xl font-bold text-center my-4 text-white"
        >Dashboard</h1>
      </header>
      <section className="h-full w-full flex flex-row gap-6 justify-center items-center">
        <Link href={'/dashboard/documents'}
          className="bg-white text-dark-gray rounded-lg py-2 px-6 hover:bg-dark-gray hover:text-white transition-all hover:duration-500"
        >
          Documents
        </Link>
        <Link href={'/dashboard/editor'}
          className="bg-white text-dark-gray rounded-lg py-2 px-6 hover:bg-dark-gray hover:text-white transition-all hover:duration-500"
        >
          Editor
        </Link>
      </section>
    </>
  )

}

export default DashboardPage