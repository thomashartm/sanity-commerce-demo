import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function withAuth<T>(Component: React.ComponentType<T>) {
  return function Authenticated(props: T) {
    const router = useRouter()
    useEffect(() => {
      if (!document.cookie.includes('auth=')) {
        router.replace(`/login?from=${router.asPath}`)
      }
    }, [router])
    return <Component {...props} />
  }
}
