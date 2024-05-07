export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/((?!signin|api|_next/static|_next/image|assets|favicon.ico).*)'],
}
