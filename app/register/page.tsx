'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      setError(error.message)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded">
      <h2 className="text-2xl mb-4">Register</h2>
      <input type="email" placeholder="Email" className="input" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="input mt-2" onChange={e => setPassword(e.target.value)} />
      <button className="btn mt-4" onClick={handleRegister}>Register</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}
