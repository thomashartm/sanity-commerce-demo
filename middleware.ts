import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const requiresAuth = request.nextUrl.searchParams.get('auth') === 'true'
  if (requiresAuth && !request.cookies.has('auth')) {
    const url = new URL('/login', request.url)
    url.searchParams.set('from', request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/trips/:path*', '/contact']
}
