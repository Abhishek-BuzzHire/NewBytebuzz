import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const underMaintenanceRoutes = [
  '/team',
  '/careers',
]

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const isUnderMaintenance = underMaintenanceRoutes.some(
    route => pathname === route || pathname.startsWith(`${route}/`)
  )

  if (isUnderMaintenance) {
    const maintenanceUrl = new URL('/maintenance', req.url)
    return NextResponse.redirect(maintenanceUrl)
  }

  return NextResponse.next()
}

export const config = {

  matcher: ['/((?!api|_next|static|favicon.ico).*)'],
}
