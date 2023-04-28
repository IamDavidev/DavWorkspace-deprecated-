'use client'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { type AuthChangeEvent } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { useEffect, useState, type ReactNode } from 'react'

interface UserProviderProps {
  children: ReactNode
}

export enum EAuthEvents {
  SIGNED_IN = 'SIGNED_IN',
  SIGNED_OUT = 'SIGNED_OUT'
}

export default function UserProvider({
  children
}: UserProviderProps): JSX.Element {
  const [browserClient] = useState(() => createBrowserSupabaseClient())
  const router = useRouter()


  useEffect(() => {
    const { data: {
      subscription
    } } = browserClient.auth.onAuthStateChange((evt: AuthChangeEvent): void => {
      if (evt === EAuthEvents.SIGNED_OUT) {
        window.location.reload()
      }
      router.refresh()
    })

    return () => { subscription.unsubscribe(); }
  }, [router, browserClient]
  )


  return <>{children}</>
}
