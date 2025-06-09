import { useRouter } from 'next/router'
import { FormEvent } from 'react'

export default function Login() {
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    document.cookie = 'auth=true; path=/'
    const from = (router.query.from as string) || '/'
    router.replace(from)
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-4">
      <input name="user" placeholder="User" className="border p-2" />
      <input name="pass" type="password" placeholder="Password" className="border p-2" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </form>
  )
}
