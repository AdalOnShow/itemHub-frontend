import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware for route protection
 * - Protects /add-book route (requires authentication)
 * - Redirects authenticated users away from /login
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if user is authenticated by looking for auth cookie
  const authToken = request.cookies.get('auth-token');
  const isAuthenticated = !!authToken;

  // Protected routes - require authentication
  const protectedRoutes = ['/add-book'];
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // If trying to access protected route without auth, redirect to login
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname); // Save intended destination
    return NextResponse.redirect(loginUrl);
  }

  // If authenticated user tries to access login page, redirect to books
  if (pathname === '/login' && isAuthenticated) {
    return NextResponse.redirect(new URL('/books', request.url));
  }

  return NextResponse.next();
}

/**
 * Configure which routes this middleware should run on
 */
export const config = {
  matcher: [
    '/add-book/:path*',
    '/login'
  ]
};
