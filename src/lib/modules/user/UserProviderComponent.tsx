'use client'

import { createBrowserSupabaseClient, type SupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { createContext, useEffect, useState, type ReactNode } from 'react'

const Context = createContext<{ supabase: SupabaseClient<any, "public", any> | null; }>({
  supabase: null,
})

export default function UserProvider({ children }: {
  children: ReactNode
}): JSX.Element {
  console.log('UserProvider')
  const [supabase] = useState(() => createBrowserSupabaseClient())
  const router = useRouter()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((evt) => {
      if (evt === "SIGNED_OUT") {
        window.location.reload()
      }
    })

    console.log('Auth state change')

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