import { defineMiddleware } from 'astro:middleware';
import { supabase } from './lib/supabase';

export const onRequest = defineMiddleware(async ({ request, redirect, locals }, next) => {
  const url = new URL(request.url);
  const { pathname } = url;
  
  // Log request for debugging
  console.log('Middleware processing URL:', url.toString());
  console.log('Pathname:', pathname);
  
  // Check for astro_path query parameter which might be present in Netlify function calls
  const astroPathParam = url.searchParams.get('astro_path');
  const effectivePath = astroPathParam || pathname;
  
  console.log('Effective path for auth check:', effectivePath);

  // Public routes - no auth needed
  if (effectivePath === '/' || 
      effectivePath === '/login' || 
      effectivePath === '/signup' || 
      effectivePath === '/reset-password') {
    console.log('Public route, no auth needed');
    return next();
  }

  // Get session from cookie
  try {
    const { data: { session } } = await supabase.auth.getSession();
    console.log('Session check:', session ? 'User is logged in' : 'No session found');

    // If no session and trying to access protected route, redirect to login
    if (!session && !effectivePath.startsWith('/public')) {
      console.log('Protected route with no session, redirecting to login');
      // When in Netlify function context, adjust the redirect URL
      const loginPath = pathname.includes('/.netlify/functions/ssr') 
        ? '/.netlify/functions/ssr?astro_path=/login'
        : '/login';
      
      return redirect(loginPath);
    }

    // Add user to locals if logged in
    if (session) {
      locals.user = session.user;
    }
  } catch (error) {
    console.error('Auth error in middleware:', error);
    // Continue anyway to avoid completely blocking the site on auth errors
  }

  // Continue to route
  return next();
});