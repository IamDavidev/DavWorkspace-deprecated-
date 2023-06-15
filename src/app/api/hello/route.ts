import { NextResponse } from 'next/server'
import { compositionRootUser } from '@lib/modules/user/main/compositionRootUser'

export async function GET(): Promise<NextResponse> {

  const { userProxyAdapter } = compositionRootUser()

  const currentUser = await userProxyAdapter.getCurrentUser()

  if (currentUser === null) return NextResponse.json({
    message: 'User not found',
    status: 404
  })


  return NextResponse.json({
    nickname: currentUser.nickname,
    id: currentUser.id,
    message: 'User found',
    status: 200
  })
}
