import { createClient } from '@supabase/supabase-js';

// Get environment variables with fallbacks
const supabaseUrl = 
  import.meta.env.PUBLIC_SUPABASE_URL || 
  process.env.PUBLIC_SUPABASE_URL;

const supabaseKey = 
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 
  process.env.PUBLIC_SUPABASE_ANON_KEY;

// Log for debugging
console.log('Initializing Supabase client with URL:', supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseKey);