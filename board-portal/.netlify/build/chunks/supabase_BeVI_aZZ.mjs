import { createClient } from '@supabase/supabase-js';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmcGRlY2Z6b3RncWttdXl2c2x0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2NDA5NjEsImV4cCI6MjA1NzIxNjk2MX0.jdlw2Mbh_Wt3ZyqspGm266THRvs3w6hfd9uO_rPNZWk", "PUBLIC_SUPABASE_URL": "https://ffpdecfzotgqkmuyvslt.supabase.co", "SITE": "https://sunstoneinclusivity.network", "SSR": true};
const getEnvVariable = (name) => {
  const value = Object.assign(__vite_import_meta_env__, { _: process.env._ })[name] || process.env[name];
  if (!value) {
    console.error(`Missing environment variable: ${name}`);
    throw new Error(`Required environment variable ${name} is missing`);
  }
  return value;
};
const supabaseUrl = getEnvVariable("PUBLIC_SUPABASE_URL");
const supabaseKey = getEnvVariable("PUBLIC_SUPABASE_ANON_KEY");
console.log("Initializing Supabase client with URL:", supabaseUrl);
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase as s };
