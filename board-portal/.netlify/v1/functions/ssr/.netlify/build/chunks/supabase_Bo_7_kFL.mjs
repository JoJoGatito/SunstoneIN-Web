import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ffpdecfzotgqkmuyvslt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmcGRlY2Z6b3RncWttdXl2c2x0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2NDA5NjEsImV4cCI6MjA1NzIxNjk2MX0.jdlw2Mbh_Wt3ZyqspGm266THRvs3w6hfd9uO_rPNZWk";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase as s };
