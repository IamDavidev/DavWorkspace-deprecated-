'use client'

import { UserRepository } from '@lib/repositories/User.repository'
import { useEffect } from 'react'

const DashboardPage = (): JSX.Element => {
  useEffect(() => {
    UserRepository.getUser().catch(() => {})
  })
  return (
    <>
      <h1>Dashboard</h1>
    </>
  )
}

export default DashboardPage
