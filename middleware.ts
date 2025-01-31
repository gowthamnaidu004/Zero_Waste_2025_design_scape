import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Check if user is authenticated
  const isAuthenticated = request.cookies.has("auth_token") // Replace with your auth check

  // Protected routes
  const protectedPaths = ["/dashboard", "/profile", "/donate", "/locations", "/branches", "/contact"]

  // Check if the current path is protected
  const isProtectedPath = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))



  return NextResponse.next()
}

export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/profile/:path*",
    "/donate/:path*",
    "/locations/:path*",
    "/branches/:path*",
    "/contact/:path*",
  ],
}

