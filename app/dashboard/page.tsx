'use client'
import { useAuth } from '@/components/AuthProvider'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function DashboardPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user])

  const logout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div className="max-w-xl mx-auto mt-20">
      <h1 className="text-3xl mb-4">Welcome to your dashboard</h1>
      <p>Your email: {user?.email}</p>
      <button onClick={logout} className="btn mt-6">Logout</button>
    </div>
  )
}
