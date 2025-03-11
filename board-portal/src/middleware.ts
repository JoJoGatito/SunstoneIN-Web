import { defineMiddleware } from 'astro:middleware';
import { supabase } from './lib/supabase';

export const onRequest = defineMiddleware(async ({ request, redirect, locals }, next) => {
  const { pathname } = new URL(request.url);

  // Public routes - no auth needed
  if (pathname === '/login' || pathname === '/signup' || pathname === '/reset-password') {
    return next();
  }

  // Get session from cookie
  const { data: { session } } = await supabase.auth.getSession();

  // If no session and trying to access protected route, redirect to login
  if (!session && !pathname.startsWith('/public')) {
    return redirect('/login');
  }

  // Add user to locals if logged in
  if (session) {
    locals.user = session.user;
  }

  // Continue to route
  return next();
});