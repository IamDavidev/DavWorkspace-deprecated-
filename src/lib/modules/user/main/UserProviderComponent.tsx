'use client'

import { createPagesBrowserClient, type SupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { createContext, type ReactNode, useEffect, useState } from 'react'

const Context = createContext<{ supabase: SupabaseClient<any, 'public', any> | null; }>({
  supabase: null
})

export default function UserProvider({ children }: {
  children: ReactNode
}): JSX.Element {
  const [supabase] = useState(() => createPagesBrowserClient())
  const router = useRouter()

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((evt) => {
      if (evt === 'SIGNED_OUT') {
        window.location.reload()
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router, supabase])

  return (
    <Context.Provider value={{ supabase }}>
      <>{children}</>
    </Context.Provider>
  )
}