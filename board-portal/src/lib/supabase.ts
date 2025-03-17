import { createClient } from '@supabase/supabase-js';

// Hardcode values for now to ensure they're available at all times
const supabaseUrl = "https://ffpdecfzotgqkmuyvslt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmcGRlY2Z6b3RncWttdXl2c2x0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2NDA5NjEsImV4cCI6MjA1NzIxNjk2MX0.jdlw2Mbh_Wt3ZyqspGm266THRvs3w6hfd9uO_rPNZWk";

// Log for debugging
console.log('Initializing Supabase client with URL:', supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseKey);