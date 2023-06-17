import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

export async function GET(req: NextRequest): Promise<NextResponse> {
  const client = createRouteHandlerClient({
    cookies
  })

  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  if (code !== null) {
    await client.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(new URL('/dashboard', req.url))
}