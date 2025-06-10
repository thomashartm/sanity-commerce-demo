'use client'
import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function withAuth<T>(Component: React.ComponentType<T>) {
  return function Authenticated(props: T) {
    const router = useRouter()
    const path = usePathname()
    useEffect(() => {
      if (!document.cookie.includes('auth=')) {
        router.replace(`/login?from=${path}`)
      }
    }, [router, path])
    return <Component {...props} />
  }
}
