

import { chain } from '@/middlewares/chain';
import { withAuthMiddleware } from '@/middlewares/withAuthMiddleware';
import { withI18nMiddleware } from './middlewares/withI18nMiddleware';


export default chain([withI18nMiddleware, withAuthMiddleware]);


export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  // matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)']
};